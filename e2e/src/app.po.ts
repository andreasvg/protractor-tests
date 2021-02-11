import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  // Product List Page
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getProductListItems(): ElementArrayFinder {
    return element.all(by.css('#product-list li')) as ElementArrayFinder;
  }

  private getFirstProductElement() {
    return element.all(by.css('#product-list li')).first();
  }

  private getLastProductElement() {
    return element.all(by.css('#product-list li')).last();
  }

  getFirstProductLinkElement() {
    return this.getFirstProductElement().element(by.css('span'));
  }

  getLastProductLinkElement() {
    return this.getLastProductElement().element(by.css('span'));
  }

  getFirstProductButton() {
    return this.getFirstProductElement().element(by.css('button'));
  }

  getFirstProductDescription(): Promise<string> {
    return this.getFirstProductLinkElement().getText() as Promise<string>;
  }

  getLastProductDescription(): Promise<string> {
    return this.getLastProductLinkElement().getText() as Promise<string>;
  }

  getSelectedProduct() {
    return element(by.id('selected-product'));
  }

  getAddProductLinkButton() {
    return element(by.id('btn-add-product'));
  }

  getSelectedProductDescription(): Promise<string> {
    return this.getSelectedProduct().getText() as Promise<string>;
  }

  // Product Page
  getMainHeadingText(): Promise<string> {
    return element(by.id('main-heading')).getText() as Promise<string>;
  }

  // Add Product Page
  navigateToAddProductPage(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/products/add`) as Promise<unknown>;
  }

  getAddProductButton() {
    return element(by.id('btn-add-product'));
  }
}
