import z from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const packagesRouter = createTRPCRouter({
  fetchTop: publicProcedure
    .input(z.object({ limit: z.number().optional() }))
    .query(async ({ input }) => {
      try {
        const { limit } = input
        const response = await fetch("/")

        return { res: limit }
      } catch (e) {
        console.log("Error::", e)
      }
    }),
})
