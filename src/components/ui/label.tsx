export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  ...props
}) => {
  return <label className="text-sm font-medium" {...props} />
}
