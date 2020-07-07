const puppeteer = require('puppeteer');

(async () => {
  // 動作が分かりやすいように headless: false と slowMoを設定している
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage();

  // ページにアクセス
  await page.goto('https://example.com');

  // スクリーンショットほ保存
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
