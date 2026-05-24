import { testConfig } from "@src/config/testConfig";
import { applyAllureMetadata, test } from "@src/fixtures/test";
import { checkoutCustomer } from "../data/checkoutData";
import { products } from "../data/products";

test.describe("checkout", () => {
  test("standard user can complete checkout @smoke @checkout", async ({
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage
  }) => {
    await applyAllureMetadata({
      feature: "Checkout",
      story: "Happy path purchase",
      severity: "blocker",
      tags: ["smoke", "checkout"]
    });

    await loginPage.open();
    await loginPage.login(testConfig.credentials.standardUser.username, testConfig.credentials.standardUser.password);
    await inventoryPage.expectLoaded();
    await inventoryPage.addProductToCart(products.backpack);
    await inventoryPage.openCart();

    await cartPage.expectLoaded();
    await cartPage.checkout();
    await checkoutPage.fillCustomerInfo(checkoutCustomer);
    await checkoutPage.expectOverviewLoaded();
    await checkoutPage.finishOrder();

    await checkoutPage.expectOrderComplete();
  });
});
