import { MailboxPage } from './app.po';

describe('mailbox App', () => {
  let page: MailboxPage;

  beforeEach(() => {
    page = new MailboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
