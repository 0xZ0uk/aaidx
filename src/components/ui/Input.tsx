import React from "react"

export interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSubmit?: () => void
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm">{label}</label>}
      <input
        className="p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit && onSubmit()
          }
        }}
      />
    </div>
  )
}

export default Input
