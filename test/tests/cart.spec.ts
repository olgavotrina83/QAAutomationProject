import { testConfig } from "@src/config/testConfig";
import { applyAllureMetadata, test } from "@src/fixtures/test";
import { products } from "../data/products";

test.describe("cart", () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(testConfig.credentials.standardUser.username, testConfig.credentials.standardUser.password);
    await inventoryPage.expectLoaded();
  });

  test("user can add and remove product from cart @smoke @cart", async ({ inventoryPage, cartPage }) => {
    await applyAllureMetadata({
      feature: "Cart",
      story: "Add and remove product",
      severity: "critical",
      tags: ["smoke", "cart"]
    });

    await inventoryPage.addProductToCart(products.backpack);
    await inventoryPage.expectCartBadgeCount(1);
    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.expectProductVisible(products.backpack);
    await cartPage.removeProduct(products.backpack);

    await cartPage.expectProductHidden(products.backpack);
  });
});
