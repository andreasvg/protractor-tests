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

  getFirstProduct() {
    return element.all(by.css('#product-list li')).first();
  }

  getFirstProductButton() {
    return this.getFirstProduct().element(by.css('button'));
  }

  getFirstProductDescription(): Promise<string> {
    return this.getFirstProduct().element(by.css('span')).getText() as Promise<string>;
  }

  getSelectedProduct() {
    return element(by.id('selected-product'));
  }

  getSelectedProductDescription(): Promise<string> {
    return this.getSelectedProduct().getText() as Promise<string>;
  }
}
