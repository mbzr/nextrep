'use client'

import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { Select } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const timezones = [
  'UTC',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Australia/Sydney',
]

const preferencesSchema = z.object({
  timezone: z.string().min(1, { message: 'Please select a timezone' }),
})
type PreferencesFormValues = z.infer<typeof preferencesSchema>

export const PreferencesForm: React.FC = () => {
  const form = useForm<PreferencesFormValues>({
    resolver: zodResolver(preferencesSchema),
    defaultValues: { timezone: 'UTC' },
  })

  const onSubmit = (data: PreferencesFormValues) => {
    // TODO: add logic to save timezone
    console.log(data)
  }

  return (
    <div
      className={`w-full rounded border border-gray-600 px-6 py-8 shadow-md`}
    >
      <h1 className="mb-4 text-2xl font-bold">Preferences</h1>
      <FormProvider {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="timezone"
            control={form.control}
            label="Timezone"
            htmlFor="timezone"
            error={form.formState.errors.timezone?.message}
            render={({ value, onChange, ...field }) => (
              <Select
                id="timezone"
                className={`h-12 w-full rounded border border-gray-300 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                value={value}
                onChange={onChange}
                {...field}
              >
                {timezones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </Select>
            )}
          />
          <Button
            type="submit"
            className={clsx(
              'w-full',
              form.formState.isDirty
                ? ''
                : `pointer-events-none cursor-default opacity-50`,
            )}
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Saving...' : 'Save'}
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
