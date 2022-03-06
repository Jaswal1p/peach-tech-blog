const {format_date} = require('../utils/helpers');

// creating test to that format_date() takes Date() objects and returns dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2022-03-06 16:12:03');
  
    expect(format_date(date)).toBe('3/06/2022');
  });

const {format_plural} = require('../utils/helpers')

// plural point and comments
test('format_plural() returns a pluralized word', () => {
      const plural = format_plural('apple', 2);
      const single = format_plural('peach', 1);
      
      expect(plural).toBe('apples');
      expect(single).toBe('peach');
});

const {format_url} = require('../utils/helpers');

// shortening URLS
test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.amazon.com/abcdefg/');
    const url3 = format_url('https://www.yahoo.com?q=hello');
  
    expect(url1).toBe('test.com');
    expect(url2).toBe('amazon.com');
    expect(url3).toBe('yahoo.com');
});