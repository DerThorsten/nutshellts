import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  // redirect console.log of the page to the terminal
  page.on('console', (msg) => {
    console.log(msg.text());
  });

  await page.goto('./test_page.html');
  await page.evaluate(() => {
      const ast = parse('echo "hello"');
  });

  // check that console has no errors
  const errors = await page.evaluate(() => (window as any).errors);
  expect(errors).toBe(undefined);

  // // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NutShell/);
});
