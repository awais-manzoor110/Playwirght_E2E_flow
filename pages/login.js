const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.login_l = "#login2";
    this.username_f = "#loginusername";
    this.password_f = "#loginpassword";
    this.login_btn = '[onclick="logIn()"]';
    this.account_t = "#nameofuser";
    this.name = "awais11";
    this.pass = "awais";
  }
  async Login_link() {
    await this.page.click(this.login_l);
  }

  async Username(username) {
    await this.page.type(this.username_f, username);
  }
  async Password(password) {
    await this.page.type(this.password_f, password);
  }
  async Login_button() {
    await this.page.click(this.login_btn);
  }
  async account_title_assertion() {
    await expect(this.page.locator(this.account_t)).toHaveText(
      "Welcome awais11"
    );
  }
};
