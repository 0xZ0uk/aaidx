import * as cheerio from "cheerio"
import z from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"

export const scraperRouter = createTRPCRouter({
  scrape: publicProcedure
    .input(z.object({ links: z.array(z.string()).min(1) }))
    .mutation(async ({ input }) => {
      try {
        const { links } = input

        if (links.length > 0) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const res = await fetch(links[0]!)
          const htmlString = await res.text()
          const $ = cheerio.load(htmlString)

          const elements = $("#readme").find("a").text()

          return { res: elements }
        }
        return { res: { message: "No links provided" } }
      } catch (e) {
        console.log("Error::", e)
      }
    }),
})
