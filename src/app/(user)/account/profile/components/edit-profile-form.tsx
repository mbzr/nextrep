'use client'

import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form-field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

const profileSchema = z.object({
  name: z.string().min(1, { message: 'Enter a display name' }),
  email: z.string().email({ message: 'Must contain a valid email address' }),
  file: z.any().optional(),
})

type ProfileFormValues = z.infer<typeof profileSchema>

export const EditProfileForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: '',
      email: '',
      file: undefined,
    },
  })

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
      form.setValue('file', file)
    }
  }

  const onSubmit = async (data: ProfileFormValues) => {
    // TODO: add logic to save profile
    console.log(data)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 2000)
  }

  return (
    <div className="w-full rounded border border-gray-600 px-6 py-8 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Edit Profile</h1>
      <FormProvider {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            control={form.control}
            label="Display Name"
            htmlFor="name"
            error={form.formState.errors.name?.message}
            render={(field) => (
              <Input
                id="name"
                type="text"
                autoComplete="name"
                {...field}
                value={typeof field.value === 'string' ? field.value : ''}
              />
            )}
          />
          <FormField
            name="email"
            control={form.control}
            label="Email Address"
            htmlFor="email"
            error={form.formState.errors.email?.message}
            render={(field) => (
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...field}
                value={typeof field.value === 'string' ? field.value : ''}
              />
            )}
          />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="file"
              className={`block text-sm font-medium text-gray-700`}
            >
              Profile Photo
            </label>
            <input
              id="file"
              name="file"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={onFileChange}
            />
            <div className="mt-1 flex items-center gap-4">
              <span
                className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gray-100`}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="profile preview"
                    className="h-12 w-12 object-cover"
                  />
                ) : (
                  <span className="text-gray-400">No image</span>
                )}
              </span>
              <label
                htmlFor="file"
                className={`ml-2 cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 text-sm leading-4 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none`}
              >
                Change
              </label>
            </div>
          </div>
          <Button
            type="submit"
            className={clsx(
              'w-full',
              form.formState.isDirty
                ? ''
                : `pointer-events-none cursor-default opacity-50`,
            )}
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
