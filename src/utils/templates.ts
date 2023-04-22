import { PromptTemplate } from "langchain/prompts"

const createProjectTemplate = `
  Given the following app description suggest ALL the best npm packages that are needed to create this project. Assume all projects are frontends and use React.

  {appDescription}
`

export const createProjectPrompt = new PromptTemplate({
  template: createProjectTemplate,
  inputVariables: ["appDescription"],
})
