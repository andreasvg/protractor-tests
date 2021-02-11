import { AppPage } from './app.po';
import { browser, ElementArrayFinder, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Protractor Tests');
  });

  describe(`product list display`, () => {
    it(`should display the expected first product`, async() => {
      // Arrange:
      // Act:
      page.navigateTo();

      // Assert:
      const firstProduct = await page.getFirstProductDescription();
      expect(firstProduct).toBeTruthy();
      expect(firstProduct).toBe('Gibson Les Paul Standard');
    });

    it(`should display a number of products`, async () => {
      // Arrange:
      // Act:
      page.navigateTo();

      // Assert:
      const products = page.getProductListItems();
      expect(products).toBeTruthy();

      const productCount = await products.count();
      expect(productCount).toBeGreaterThan(1);
    });
  });

  describe(`product selection`, () => {
    it(`should not display any product if none is selected yet`, () => {
      // Arrange:
      // Act:
      page.navigateTo();

      // Assert:
      const selectedProductDescription = page.getSelectedProduct();
      expect(selectedProductDescription.isPresent()).toBeFalsy();
    });

    it(`clicking a product button should select that product`, async () => {
      // Arrange:
      page.navigateTo();
      const firstProductButton =  page.getFirstProductButton();
      const expectedString = await page.getFirstProductDescription();

      // Act:
      firstProductButton.click();

      // Assert:
      const selectedProductDescription = await page.getSelectedProductDescription();
      expect(selectedProductDescription).toBe(expectedString);
    });
  });

  /*
  - test navigating to a product page (check product details in that page)
  - test adding a new product
  - test basic page navigation (add a nav bar)
  */

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
