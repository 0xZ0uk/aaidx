import * as cheerio from "cheerio"

export const scrapePage = async (url: string) => {
  try {
    const res = await fetch(url)
    const htmlString = await res.text()
    const $ = cheerio.load(htmlString)

    const elements = $("#readme")
      .get()
      .map((h) => {
        return {
          title: $(h).text(),
          text: $(h).find("~ p").first().text(),
        }
      })

    return elements
  } catch (e) {
    console.error("Error::", e)
  }
}
