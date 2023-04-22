import { ChatOpenAI } from "langchain/chat_models/openai"
import { OpenAIEmbeddings } from "langchain/embeddings/openai"
import { OpenAI } from "langchain/llms/openai"

import { env } from "@/env.mjs"

export const llmModel = new OpenAI({
  openAIApiKey: env.OPENAI_API_KEY,
  temperature: 0.9,
})

export const baseChatModel = new ChatOpenAI({
  openAIApiKey: env.OPENAI_API_KEY,
  temperature: 0,
})

export const embedder = new OpenAIEmbeddings({
  modelName: "text-embedding-ada-002",
  openAIApiKey: env.OPENAI_API_KEY,
  maxConcurrency: 5,
})
