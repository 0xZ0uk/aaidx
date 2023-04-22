import z from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import newProjectChain from "@/utils/chains/newProject"

export const scraperRouter = createTRPCRouter({
  scrape: publicProcedure
    .input(z.object({ prompt: z.string() }))
    .mutation(async ({ input }) => {
      try {
        const { prompt } = input
        const response = await newProjectChain.call({ appDescription: prompt })
        return { res: response }
      } catch (e) {
        console.log("Error::", e)
      }
    }),
})
