import { chatRouter } from "./routers/chat"
import { packagesRouter } from "./routers/packages"
import { scraperRouter } from "./routers/scraper"
import { createTRPCRouter } from "./trpc"

export const appRouter = createTRPCRouter({
  chat: chatRouter,
  packages: packagesRouter,
  scraper: scraperRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
