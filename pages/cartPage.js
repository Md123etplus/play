exports.CartPage=
class CartPage {
    constructor(page){
        this.page = page;
        this.checkoutButton = '#checkout';
        this.returnButton = '#continue-shopping';
    }
    async goToCartPage() {
        await this.page.goto("https://www.saucedemo.com/cart.html");
    }
    async proceedToCheckout() {
        await this.page.locator(this.checkoutButton).click();
        await this.page.waitForTimeout(1000);
    }
    async enterCheckoutInformation(firstName, lastName, postalCode) {
        await this.page.locator('#first-name').fill(firstName);
        await this.page.locator('#last-name').fill(lastName);
        await this.page.locator('#postal-code').fill(postalCode);
        await this.page.locator('#continue').click();
        await this.page.waitForTimeout(1000);
    }
    async completePurchase() {
        await this.page.locator('#finish').click();
        await this.page.waitForTimeout(1000);
    }
    async returnToShopping() {
        await this.page.locator(this.returnButton).click();
        await this.page.waitForTimeout(1000);
    }
    async backHome(){
        await this.page.locator('#back-to-products').click();
        await this.page.waitForTimeout(2000);
    }
}