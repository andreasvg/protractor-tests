import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('protractor-tests app is running!');
  });

  it(`should display the expected first product`, async() => {
    // Arrange:
    // Act:
    page.navigateTo();

    // Assert:
    //await browser.wait(browser.ExpectedConditions.presenceOf(await page.getProductList()));

    const firstProduct = await page.getFirstProduct();
    expect(firstProduct).toBeTruthy();
    expect(firstProduct).toBe('Gibson Les Paul Standard');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
