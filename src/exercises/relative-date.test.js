import {calculateRelativeDate} from './relative-date';
import { expect } from '@open-wc/testing';

describe('Calculate Relative Date', () => {

  it('Today', () => {
    const date = new Date();
    const input  = date;
    const expected = 'Today';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Yesterday', () => {
    const date = new Date();
    const input  = date.setDate(date.getDate() - 1);
    const expected = 'Yesterday';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('This week', () => {
    const date = new Date();
    const input  = date.setDate(date.getDate() - 3);
    const expected = 'This week';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Last week', () => {
    const date = new Date();
    const input  = date.setDate(date.getDate() - 7);
    const expected = 'Last week';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('This month', () => {
    const date = new Date();
    const input  = date.setDate(date.getDate() - 8);
    const expected = 'This month';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  // it('Last month', () => {
  //   const date = new Date();
  //   const input  = date.setMonth(date.getMonth() - 1);
  //   const expected = 'Last month';
  //   const actual = calculateRelativeDate(input);
  //   expect(actual).to.equal(expected);
  // });
  it('This year', () => {
    const date = new Date();
    const input  = date.setMonth(date.getMonth() + 1);
    const expected = 'This year';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  });
  it('Last year', () => {
    const date = new Date();
    const input  = date.setMonth(date.getMonth() - 11);
    const expected = 'Last year';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  })
  it('Long time ago', () => {
    const date = new Date();
    const input  = date.setFullYear(date.getFullYear() - 2);
    const expected = 'Long time ago';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  })
  it('Invalid Date', () => {
    const date = new Date();
    const input  = date.setFullYear(date.getFullYear() + 2);
    const expected = 'Invalid Date';
    const actual = calculateRelativeDate(input);
    expect(actual).to.equal(expected);
  })
});
