const { expect } = require("@playwright/test");

exports.AddToCart = class AddToCart {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.prodct = '//*[@id="tbodyid"]/div/div/div/h4/a';
    this.addtocart_btn = ".btn-lg";
    this.product_t = ".name";
    this.prod_name = "Sony vaio i5";
  }

  async products(productName) {
    const products_list = await this.page.$$(this.prodct);
    for (const product of products_list) {
      if (productName === (await product.textContent())) {
        await product.click();
        break;
      }
    }
  }

  async product_title_assertion(pro_name) {
    await expect(this.page.locator(this.product_t)).toHaveText(pro_name);
  }
  async AddToCart_Button() {
    await this.page.waitForSelector(this.addtocart_btn);
    await this.page.click(this.addtocart_btn);
    await this.page.on("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });
  }

  //   async product_title(){
  //     await this.page.locator(this.product_t).textContent();
  //   }
};
