import { PromptTemplate } from "langchain/prompts"

const templates = {
  createProject: `Answer the question based on the context below. You should follow ALL the following rules when generating and answer:
    - There will be a CONTEXT, and a APP_DESCRIPTION.
    - The final answer must always be styled using markdown.
    - Your main goal is to point the user to the right source of information (the source is always a URL) based on the CONTEXT you are given.
    - Your secondary goal is to provide the user with all relevant packages for the APP_DESCRIPTION.
    - Based on the CONTEXT, choose the source or sources that are most relevant to the APP_DESCRIPTION.
    - Do not make up any answers if the CONTEXT does not have relevant information.
    - The CONTEXT is a set of JSON objects, each includes the field "text" where the content is stored, and "url" where the url of the page is stored.
    - The URLs are the URLs of the pages that contain the CONTEXT. Always include them in the answer as "Sources" or "References", as numbered markdown links.
    - Do not mention the CONTEXT in the answer, but use it to generate the answer.
    - ALWAYS prefer the result with the highest "score" value.
    - Ignore any content that is stored in html tables.
    - The answer should only be based on the CONTEXT. Do not use any external sources. Do not generate the response based on the question without clear reference to the context.
    - Summarize the CONTEXT to make it easier to read, but don't omit any information.
    - It is IMPERATIVE that any link provided is found in the CONTEXT. Prefer not to provide a link if it is not found in the CONTEXT.

    CONTEXT: {summaries}

    QUESTION: {appDescription}

    URLS: {urls}

    Final Answer: 
  `,
}

const createProjectTemplate = `
  Given the following app description suggest ALL the best npm packages that are needed to create this project. Assume all projects are frontends and use React.

  {appDescription}
`

export const createProjectPrompt = new PromptTemplate({
  template: createProjectTemplate,
  inputVariables: ["appDescription"],
})

export default templates
