import { Label } from '@/components/ui/label'
import { ReactElement } from 'react'
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'

interface FormFieldProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>
  control: Control<TFieldValues>
  label: string
  htmlFor?: string
  error?: string
  render: (
    fieldProps: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>,
  ) => ReactElement
}

export function FormField<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  htmlFor,
  error,
  render,
}: FormFieldProps<TFieldValues>) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor || name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => render(field)}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}
