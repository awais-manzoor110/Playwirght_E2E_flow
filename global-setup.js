
const { chromium } = require("@playwright/test");
import loginCreds from "../../tests/playwright/support/login/LoginDetails.json";
const globalSetup = async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  // await page.goto("https://www-awais.dev2.ts.zomirion.com/");
  await page.goto("/");
  await page.fill("#username-textfield", loginCreds.USERNAME);
  await page.fill("#password-textfield", loginCreds.PASSWORD);
  await page.click("#sign-in-button");
  await page.waitForTimeout(10000);
  await page.context().storageState({ path: "./loginAuth.json" });
  await browser.close();
};

export default globalSetup;



