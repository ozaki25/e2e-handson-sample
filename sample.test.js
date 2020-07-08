describe('example', () => {
  beforeAll(async () => {
    await page.goto('https://example.com');
  });

  test('example.comにアクセスできること', async () => {
    const result = page.title(); // ページのタイトルを取得
    const expected = 'Example Domain';
    await expect(result).resolves.toMatch(expected);
  });
});
