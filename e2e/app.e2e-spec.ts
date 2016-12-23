import { TopjavaFrontendPage } from './app.po';

describe('topjava-frontend App', function() {
  let page: TopjavaFrontendPage;

  beforeEach(() => {
    page = new TopjavaFrontendPage();
  });

  it('should display app name', () => {
    page.navigateTo();
    expect(page.getNavbarBrandText()).toEqual('Calories management');
  });
});
