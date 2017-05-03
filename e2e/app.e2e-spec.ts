import { BabelCardPage } from './app.po';

describe('babel-card App', function() {
  let page: BabelCardPage;

  beforeEach(() => {
    page = new BabelCardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
