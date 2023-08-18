import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { AddToCart } from "../pages/add-to-cart";
import { Checkout } from "../pages/checkout";

test.describe("E2E test", () => {
  test("Test verify that user is able to complete the flow", async ({
    page,
  }) => {
    const user = new LoginPage(page);
    const cart = new AddToCart(page);
    const checkout = new Checkout(page);
    await page.goto("/");
    await user.Login_link();
    await page.waitForSelector(user.username_f);
    await user.Username(user.name);
    await page.waitForSelector(user.password_f);
    await user.Password(user.pass);
    await user.Login_button();
    await user.account_title_assertion();
    await cart.products(cart.prod_name);
    await cart.AddToCart_Button();
    await cart.product_title_assertion(cart.prod_name);
    await checkout.cart_tab();
    await page.waitForSelector(checkout.price_m);
    const checkout_price = await checkout.product_price_on_checkout();
    await checkout.place_order_button();
    const form_price = await checkout.product_price_on_form();
    await expect(checkout_price).toEqual(form_price);
    await checkout.fill_name(checkout.name);
    await checkout.fill_country(checkout.country);
    await checkout.fill_city(checkout.city);
    await checkout.fill_credit_card(checkout.credit_card);
    await checkout.fill_month(checkout.month);
    await checkout.fill_year(checkout.year);
    await checkout.purchase_button();
    await checkout.success_message_validation();
  });
});
