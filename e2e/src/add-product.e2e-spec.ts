import { browser } from "protractor";
import { AppPage } from "./app.po";

describe(`Add New Product`, () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  beforeEach(async() => {
    await browser.waitForAngularEnabled(true);
  });

  describe(`Adding a product`, () => {
    it(`should cause the newly added product to appear in the list`, async () => {
      // Arrange:
      page.navigateTo();
      const products = page.getProductListItems();

      const productCount = await products.count();

      const addProductLinkBtn = page.getAddProductLinkButton();

      // Act:
      addProductLinkBtn.click();
      browser.sleep(1000);
      const addProductBtn = page.getAddProductButton();
      addProductBtn.click();
      browser.sleep(1000);

      // Assert:
      const newCount = await page.getProductListItems().count();
      expect(newCount).toEqual(productCount + 1);

      const lastProduct = await page.getLastProductDescription();
      expect(lastProduct).toBeTruthy();
      expect(lastProduct).toBe('Gibson Firebird');
    });
  });
});
