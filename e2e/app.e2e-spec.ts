import { TopjavaFrontendPage } from './app.po';

describe('topjava-frontend App', function() {
  let page: TopjavaFrontendPage;

  beforeEach(() => {
    page = new TopjavaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
