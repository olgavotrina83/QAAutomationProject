import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly title: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId("title");
    this.checkoutButton = page.getByTestId("checkout");
  }

  async expectLoaded(): Promise<void> {
    await expect(this.title).toHaveText("Your Cart");
  }

  async expectProductVisible(productName: string): Promise<void> {
    await expect(this.page.getByTestId("inventory-item-name").filter({ hasText: productName })).toBeVisible();
  }

  async removeProduct(productName: string): Promise<void> {
    await this.productByName(productName).getByRole("button", { name: "Remove" }).click();
  }

  async expectProductHidden(productName: string): Promise<void> {
    await expect(this.page.getByTestId("inventory-item-name").filter({ hasText: productName })).toHaveCount(0);
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }

  private productByName(productName: string): Locator {
    return this.page.locator(".cart_item").filter({ has: this.page.getByText(productName, { exact: true }) });
  }
}
