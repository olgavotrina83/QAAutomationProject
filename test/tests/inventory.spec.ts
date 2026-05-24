import { testConfig } from "@src/config/testConfig";
import { expectSortedAscending } from "@src/assertions/sorting";
import { applyAllureMetadata, test } from "@src/fixtures/test";

test.describe("inventory", () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(testConfig.credentials.standardUser.username, testConfig.credentials.standardUser.password);
    await inventoryPage.expectLoaded();
  });

  test("inventory page displays products @smoke @inventory", async ({ inventoryPage }) => {
    await applyAllureMetadata({
      feature: "Inventory",
      story: "Product list",
      severity: "critical",
      tags: ["smoke", "inventory"]
    });

    await inventoryPage.expectLoaded();
  });

  test("products can be sorted by name ascending @regression @inventory", async ({ inventoryPage }) => {
    await applyAllureMetadata({
      feature: "Inventory",
      story: "Product sorting",
      severity: "normal",
      tags: ["regression", "inventory"]
    });

    await inventoryPage.sortBy("az");

    expectSortedAscending(await inventoryPage.productNames());
  });
});
