import { MDLTestPage } from './app.po';

describe('mdl-test App', () => {
  let page: MDLTestPage;

  beforeEach(() => {
    page = new MDLTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
