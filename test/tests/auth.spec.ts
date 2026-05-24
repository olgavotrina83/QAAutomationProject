import { testConfig } from "@src/config/testConfig";
import { applyAllureMetadata, expect, test } from "@src/fixtures/test";

test.describe("auth", () => {
  test("standard user can log in @smoke @auth", async ({ loginPage, inventoryPage }) => {
    await applyAllureMetadata({
      feature: "Authentication",
      story: "Successful login",
      severity: "blocker",
      tags: ["smoke", "auth"]
    });

    await loginPage.open();
    await loginPage.login(testConfig.credentials.standardUser.username, testConfig.credentials.standardUser.password);

    await inventoryPage.expectLoaded();
  });

  test("locked out user sees login error @regression @auth", async ({ loginPage }) => {
    await applyAllureMetadata({
      feature: "Authentication",
      story: "Locked user login",
      severity: "critical",
      tags: ["regression", "auth"]
    });

    await loginPage.open();
    await loginPage.login(testConfig.credentials.lockedOutUser.username, testConfig.credentials.lockedOutUser.password);

    await loginPage.expectLoginError("Sorry, this user has been locked out.");
  });

  test("standard user can log out @regression @auth", async ({ loginPage, inventoryPage, page }) => {
    await applyAllureMetadata({
      feature: "Authentication",
      story: "Logout",
      severity: "normal",
      tags: ["regression", "auth"]
    });

    await loginPage.open();
    await loginPage.login(testConfig.credentials.standardUser.username, testConfig.credentials.standardUser.password);
    await inventoryPage.expectLoaded();

    await inventoryPage.logout();

    await expect(page.getByTestId("login-button")).toBeVisible();
  });
});
