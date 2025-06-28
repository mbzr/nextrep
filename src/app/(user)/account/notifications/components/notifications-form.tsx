'use client'

import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const notificationsSchema = z.object({
  newsletter: z.boolean(),
})

type NotificationsFormValues = z.infer<typeof notificationsSchema>

interface NotificationsFormProps {
  initialValue?: boolean
}

export const NotificationsForm: React.FC<NotificationsFormProps> = ({
  initialValue = false,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsSchema),
    defaultValues: { newsletter: initialValue },
  })

  const onSubmit = async (data: NotificationsFormValues) => {
    // TODO: add logic to save notifications
    console.log(data)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 2000)
  }

  return (
    <div
      className={`w-full rounded border border-gray-600 px-6 py-8 shadow-md`}
    >
      <FormProvider {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Notifications
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Select which type of communication you would like to receive from
              NextRep.
            </p>
          </div>
          <fieldset>
            <legend className="mb-2 text-base font-medium text-gray-900">
              By Email
            </legend>
            <div className="flex items-center space-x-3">
              <input
                id="newsletter"
                type="checkbox"
                className={`h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500`}
                {...form.register('newsletter')}
              />
              <label htmlFor="newsletter" className="font-medium text-gray-700">
                Weekly newsletter
              </label>
            </div>
          </fieldset>
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting || !form.formState.isDirty}
          >
            {form.formState.isSubmitting
              ? 'Saving...'
              : !form.formState.isDirty && isSubmitted
                ? 'Saved!'
                : 'Save'}
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default NotificationsForm
