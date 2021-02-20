import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async toolbarIsPresent(): Promise<boolean> {
    return element(by.tagName('mat-toolbar')).isPresent();
  }
}
