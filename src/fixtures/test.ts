import { test as base } from "@playwright/test";
import { allure } from "allure-playwright";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";

type AppFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  }
});

export const expect = test.expect;

export async function applyAllureMetadata(options: {
  epic?: string;
  feature: string;
  story: string;
  severity: "blocker" | "critical" | "normal" | "minor" | "trivial";
  tags: string[];
}): Promise<void> {
  await allure.epic(options.epic ?? "SauceDemo Web");
  await allure.feature(options.feature);
  await allure.story(options.story);
  await allure.severity(options.severity);
  await allure.owner("qa-automation");
  await allure.tags(...options.tags);
}
