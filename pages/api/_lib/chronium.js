import puppeteer, { Page } from "puppeteer-core";
import { getOptions } from "./options";

let _page;

async function getPage(isDev) {
  if (_page) {
    return _page;
  }

  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);

  _page = await browser.newPage();

  return _page;
}

export async function getScreenshot(html, isDev) {
  const page = await getPage(isDev);

  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html);

  const file = await page.screenshot({ type: "png" });

  return file;
}
