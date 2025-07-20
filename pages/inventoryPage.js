exports.InventoryPage=
class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = 'div.inventory_item_label > a';
    this.addToCartButton = '//*[@id="add-to-cart"]';
    this.cart="a.shopping_cart_link";
  }
  async goToInventoryPage() {
    await this.page.goto("https://www.saucedemo.com/inventory.html");
  }
  async addProductToCart(productName){
    const productList = await this.page.$$(this.inventoryItems);
    for (const product of productList) {
      const text = await product.textContent();
      if (text.includes(productName)) {
        await product.click();
        await this.page.waitForTimeout(1000); // Wait for the UI to update
        break;
      }
    }
    const addToCartButton = await this.page.$(this.addToCartButton);
    if (addToCartButton) {
      await addToCartButton.click();
      await this.page.waitForTimeout(1000); // Wait for the cart to update
    }

  }
  async goToCart() {
    await this.page.locator(this.cart).click();
    await this.page.waitForTimeout(1000); // Wait for the cart page to load
  }
  
}