import { PersonInfoPage } from './app.po';

describe('person-info App', () => {
  let page: PersonInfoPage;

  beforeEach(() => {
    page = new PersonInfoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
