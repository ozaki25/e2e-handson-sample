describe('Googleでpuppeteerを検索してリポジトリにアクセスする', () => {
  beforeAll(async () => {
    jest.setTimeout(30000);
  });

  test('Googleにアクセス', async () => {
    await page.goto('https://google.com');
    await page.screenshot({ path: 'screenshots/1.png', fullPage: true });
  });

  test('検索ワードを入力', async () => {
    await expect(page).toFill('input[name="q"]', 'puppeteer');
    await page.screenshot({ path: 'screenshots/2.png', fullPage: true });
  });

  test('検索ボタンを押して結果表示', async () => {
    await Promise.all([
      expect(page).toClick('input[name="btnK"]'),
      page.waitForNavigation(),
    ]);
    await expect(page).toMatchElement('#search');
    await expect(page).toMatchElement('#result-stats', {
      text: '約 6,380,000 件',
    });
    await page.screenshot({ path: 'screenshots/3.png', fullPage: true });
  });

  test('Puppeteerのリポジトリを選択して遷移', async () => {
    await Promise.all([
      expect(page).toClick('a[href="https://github.com/puppeteer/puppeteer"]'),
      page.waitForNavigation(),
    ]);
    await expect(page).toMatch('puppeteer/puppeteer');
    await page.screenshot({ path: 'screenshots/4.png', fullPage: true });
  });
});
