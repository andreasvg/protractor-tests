import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getProductList(): ElementArrayFinder {
    return element.all(by.css('#product-list'));
  }

  getFirstProduct(): Promise<string> {
    return element.all(by.css('#product-list li')).first().getText() as Promise<string>;
  }
}
