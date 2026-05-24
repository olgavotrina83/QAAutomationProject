import { expect, type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly title: Locator;
  readonly productItems: Locator;
  readonly shoppingCartLink: Locator;
  readonly sortSelect: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(private readonly page: Page) {
    this.title = page.getByTestId("title");
    this.productItems = page.getByTestId("inventory-item");
    this.shoppingCartLink = page.getByTestId("shopping-cart-link");
    this.sortSelect = page.getByTestId("product-sort-container");
    this.menuButton = page.getByRole("button", { name: "Open Menu" });
    this.logoutLink = page.getByTestId("logout-sidebar-link");
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*inventory\.html/);
    await expect(this.title).toHaveText("Products");
    await expect(this.productItems).toHaveCount(6);
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.productByName(productName).getByRole("button", { name: "Add to cart" }).click();
  }

  async removeProductFromCart(productName: string): Promise<void> {
    await this.productByName(productName).getByRole("button", { name: "Remove" }).click();
  }

  async openCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }

  async sortBy(option: "az" | "za" | "lohi" | "hilo"): Promise<void> {
    await this.sortSelect.selectOption(option);
  }

  async productNames(): Promise<string[]> {
    return this.page.getByTestId("inventory-item-name").allTextContents();
  }

  async expectCartBadgeCount(count: number): Promise<void> {
    await expect(this.page.getByTestId("shopping-cart-badge")).toHaveText(String(count));
  }

  async expectCartBadgeHidden(): Promise<void> {
    await expect(this.page.getByTestId("shopping-cart-badge")).toHaveCount(0);
  }

  async logout(): Promise<void> {
    await this.menuButton.click();
    await this.logoutLink.click();
  }

  private productByName(productName: string): Locator {
    return this.productItems.filter({ has: this.page.getByText(productName, { exact: true }) });
  }
}
