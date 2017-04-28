import { SeaBattlePage } from './app.po';

describe('sea-battle App', () => {
  let page: SeaBattlePage;

  beforeEach(() => {
    page = new SeaBattlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
