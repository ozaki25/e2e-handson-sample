const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage();

  await page.goto('https://google.com');
  await page.screenshot({ path: '1.png', fullPage: true });

  await page.type('input[name="q"]', 'puppeteer');
  await page.screenshot({ path: '2.png', fullPage: true });

  await page.click('input[name="btnK"]');
  await page.waitForSelector('#search');
  await page.screenshot({ path: '3.png', fullPage: true });

  await page.click('a[href="https://pptr.dev/"]');
  await page.waitForSelector('content-box');
  await page.screenshot({ path: '4.png', fullPage: true });

  await browser.close();
})();
