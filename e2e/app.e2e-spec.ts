import { AngularAttributeDirectivesPage } from './app.po';

describe('angular-attribute-directives App', () => {
  let page: AngularAttributeDirectivesPage;

  beforeEach(() => {
    page = new AngularAttributeDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
