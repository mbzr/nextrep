import { Checkbox as CheckboxHeadless } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/16/solid'
import clsx from 'clsx'

export const Checkbox = ({
  className,
  checked,
  onChange,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (checked: boolean) => void
}) => {
  return (
    <CheckboxHeadless
      checked={checked}
      onChange={onChange}
      className={clsx(
        `group data-checked:bg-primary size-5 rounded-md bg-white/10 p-1 ring-1 ring-black/15 ring-inset focus:not-data-focus:outline-none data-focus:outline data-focus:outline-offset-2 data-focus:outline-black`,
        className,
      )}
      {...rest}
    >
      <CheckIcon
        className={`hidden size-3 fill-black group-data-checked:block group-data-checked:fill-white`}
      />
    </CheckboxHeadless>
  )
}
