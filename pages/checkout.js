const { expect } = require("@playwright/test");

exports.Checkout = class Checkout {
  /**
   *
   * @param {import ('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cart_l = "#cartur";
    this.place_order_btn = ".btn.btn-success";
    this.price_m = "#totalp";
    this.price_c = "#totalm";
    this.name_f = "#name";
    this.country_f = "#country";
    this.city_f = "#city";
    this.credit_card_f = "#card";
    this.month_f = "#month";
    this.year_f = "#year";
    this.purchase_btn = "[onclick='purchaseOrder()']";
    this.success_m = "//div[@data-animation='pop']/h2";
    this.name = "Awais";
    this.country = "Pakistan";
    this.city = "Lahore";
    this.credit_card = "5555555555554444";
    this.month = "August";
    this.year = "2023";
  }

  async cart_tab() {
    await this.page.click(this.cart_l);
  }

  async product_price_on_checkout() {
    const txt = await this.page.locator(this.price_m).textContent();
    return txt;
  }

  async product_price_on_form() {
    let txt = await this.page.locator(this.price_c).textContent();
    const price = txt.split(":")[1].trim().split(" ")[0];
    return price;
  }

  async place_order_button() {
    await this.page.click(this.place_order_btn);
  }

  async fill_name(name) {
    await this.page.locator(this.name_f).fill(name);
  }
  async fill_country(country) {
    await this.page.locator(this.country_f).fill(country);
  }

  async fill_city(city) {
    await this.page.locator(this.city_f).fill(city);
  }
  async fill_credit_card(credit_card) {
    await this.page.locator(this.credit_card_f).fill(credit_card);
  }
  async fill_month(month) {
    await this.page.locator(this.month_f).fill(month);
  }
  async fill_year(year) {
    await this.page.locator(this.year_f).fill(year);
  }
  async purchase_button() {
    // await this.page.locator(this.purchase_btn).focus();
    await this.page.click(this.purchase_btn);
  }

  async success_message_validation() {
    await expect(this.page.locator(this.success_m)).toHaveText(
      "Thank you for your purchase!"
    );
  }
};
