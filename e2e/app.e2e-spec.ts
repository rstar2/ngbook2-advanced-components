import { NgBook2AdvancedComponentsPage } from './app.po';

describe('ng-book2-advanced-components App', function() {
  let page: NgBook2AdvancedComponentsPage;

  beforeEach(() => {
    page = new NgBook2AdvancedComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
