import { NgFormsWorkshopPage } from './app.po';

describe('ng-forms-workshop App', () => {
  let page: NgFormsWorkshopPage;

  beforeEach(() => {
    page = new NgFormsWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
