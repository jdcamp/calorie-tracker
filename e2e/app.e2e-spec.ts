import { CalorieCounterPage } from './app.po';

describe('calorie-counter App', function() {
  let page: CalorieCounterPage;

  beforeEach(() => {
    page = new CalorieCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
