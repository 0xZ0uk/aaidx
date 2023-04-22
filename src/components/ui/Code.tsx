import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface SyntaxHighlighterProps {
  children: string
  label?: string
  language?: string
}

const Code: React.FC<SyntaxHighlighterProps> = ({
  children,
  label,
  language = "javascript",
}) => {
  return (
    <div>
      {Boolean(label) && (
        <label
          htmlFor="code"
          className="text-stone-500 text-sm uppercase tracking-widest font-bold"
        >
          {label}
        </label>
      )}
      <SyntaxHighlighter language={language} style={dark}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default Code
