import { LLMChain } from "langchain/chains"

import { llmModel } from "../llm"
import { createProjectPrompt } from "../templates"

const newProjectChain = new LLMChain({ llm: llmModel, prompt: createProjectPrompt })

export default newProjectChain
