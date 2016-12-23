import { browser, element, by } from 'protractor';

export class TopjavaFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarBrandText() {
    return element(by.className('navbar-brand')).getText();
  }
}
