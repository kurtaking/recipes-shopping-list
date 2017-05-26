import { Angular4AppPage } from './app.po';

describe('recipe-shopping-list App', () => {
  let page: Angular4AppPage;

  beforeEach(() => {
    page = new Angular4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
