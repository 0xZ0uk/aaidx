import z from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import newProjectChain from "@/utils/chains/newProject"

export const chatRouter = createTRPCRouter({
  chat: publicProcedure
    .input(z.object({ prompt: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const { prompt } = input
        const response = await newProjectChain.call({ appDescription: prompt })
        return { data: response }
      } catch (e) {
        console.log("Error::", e)
      }
    }),
})
