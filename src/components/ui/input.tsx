export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <input
      className={`h-12 w-full rounded border border-gray-300 px-3 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
      {...props}
    />
  )
}
