import { test, expect } from "@playwright/test";

test("first test", async ({ page }) => {
  await page.goto("https://release-financing-v2-auth.manafatech.com/");
  const pageTile = await page.title();
  await expect(page).toHaveTitle("منافع للتمويل");
  const url = page.url();
  await expect
    .soft(page)
    .toHaveURL("https://release-financing-v2-auth.manafatech.com/");
  await page.click('//div[contains(text(),"تسجيل الدخول")]');
  await page.fill("#email-or-nid", "1200000045");
  await page.fill("#password", "Test#12345");
  await page.click("//button[contains(text(),'تسجيل الدخول')]");
  await page.waitForTimeout(3000);
});

test("second test", async ({ page }) => {
  // await page.viewportSize(1280, 720)
  await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
  await page.click("button");
  let op = await page.$$("//ul/li/a/label");
  for (let options of op) {
    let value = await options.textContent();
    console.log("-------->", value);
    if (value.includes("Python")) {
      console.log(">", value);
      await options.click();
    }
  }

  await page.waitForTimeout(3000);
});

test.only("fames", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const total_frames = page.frames();
  console.log("number of frames", total_frames.length);
  const frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_1.html",
  });
  await frame1.fill("[name='mytext1']", "test");
  await page.waitForTimeout(3000);
});

test("handling table and pagination@sanity", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const table = await page.locator("#productTable");
  const columns = await table.locator("thead tr th");
  console.log("number of columns", await columns.count());
  const rows = await table.locator("tbody tr ");
  console.log("number of rows", await rows.count());

  await match_row(rows, page, "Product 1");
  await page.waitForTimeout(3000);
  const pages = await page.locator(".pagination li a");

  for (let g = 0; g < (await pages.count()); g++) {
    if (g > 0) {
      await pages.nth(g).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      const row = await rows.nth(i);
      const tds = await row.locator("td");
      for (let j = 0; j < (await tds.count()) - 1; j++) {
        const t = tds.nth(j);
        console.log(">", await t.textContent());
      }
    }
  }
});

async function match_row(rows, page, name) {
  const match = rows.filter({
    has: await page.locator("td"),
    hasText: name,
  });
  match.locator("input").check();
}
