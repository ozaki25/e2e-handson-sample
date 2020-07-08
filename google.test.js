describe('Google検索', () => {
  beforeAll(async () => {});

  test('Googleでpuppeteerを検索してGitHubにアクセスする', async () => {
    jest.setTimeout(30000);
    await page.goto('https://google.com');
    await page.screenshot({ path: '1.png', fullPage: true });

    await expect(page).toFill('input[name="q"]', 'puppeteer');
    await page.screenshot({ path: '2.png', fullPage: true });

    await Promise.all([
      expect(page).toClick('input[name="btnK"]'),
      page.waitForNavigation(),
    ]);
    await expect(page).toMatchElement('#search');
    await page.screenshot({ path: '3.png', fullPage: true });

    await Promise.all([
      expect(page).toClick('a[href="https://github.com/puppeteer/puppeteer"]'),
      page.waitForNavigation(),
    ]);
    await expect(page).toMatch('puppeteer/puppeteer');
    await page.screenshot({ path: '4.png', fullPage: true });
  });
});
