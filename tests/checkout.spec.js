import { test, expect } from '@playwright/test';
import { CartPage } from "../pages/cartPage";

test('Test Add To cart', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.goToCartPage();
    await cartPage.proceedToCheckout();
    await cartPage.enterCheckoutInformation('John', 'Doe', '12345');
    await cartPage.completePurchase();
    await page.waitForTimeout(3000);
    await cartPage.backHome();
    await page.waitForTimeout(2000);
})


