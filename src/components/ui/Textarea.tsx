import React from "react"

import { InputProps } from "./Input"

const Textarea: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm">{label}</label>}
      <textarea
        className="p-4 border bg-white text-stone-500 dark:placeholder:text-stone-700 dark:bg-black rounded-lg focus:outline-none border-none font-mono"
        rows={5}
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

export default Textarea
