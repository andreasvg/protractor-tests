import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getProductListItems(): ElementArrayFinder {
    return element.all(by.css('#product-list li')) as ElementArrayFinder;
  }

  private getFirstProductElement() {
    return element.all(by.css('#product-list li')).first();
  }

  getFirstProductLinkElement() {
    return this.getFirstProductElement().element(by.css('span'));
  }

  getFirstProductButton() {
    return this.getFirstProductElement().element(by.css('button'));
  }

  getFirstProductDescription(): Promise<string> {
    return this.getFirstProductLinkElement().getText() as Promise<string>;
  }

  getSelectedProduct() {
    return element(by.id('selected-product'));
  }

  getSelectedProductDescription(): Promise<string> {
    return this.getSelectedProduct().getText() as Promise<string>;
  }

  getMainHeadingText(): Promise<string> {
    return element(by.id('main-heading')).getText() as Promise<string>;
  }


}
