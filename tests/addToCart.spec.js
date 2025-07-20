import { InventoryPage, inventoryPage } from "../pages/inventoryPage";
import { test, expect } from '@playwright/test';


test('Test Add To cart', async ({ page }) => {
    const inventoryPage= new InventoryPage(page);
    await inventoryPage.goToInventoryPage();
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await page.waitForTimeout(3000);
})


