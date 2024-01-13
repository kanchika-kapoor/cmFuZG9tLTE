/*
* Write a function that will take a date and compare with today date and return text:
* - Today: same year, same month, same date
* - Yesterday: same year, same month, date = today - 1
* - This week: same year, same month, today - 7 < date < today - 1
* - Last week: same year, same month, date = today - 7
* - This month: same year, same month, date < today - 7
* - Last month: same year, month = current month - 1
* - This year: same year
* - last year: year = current year - 1
* - Long time ago: everything else
*
* Lastly, please write a unit test for calculateRelativeDate function
* */

const calculateRelativeDate = (inputDate) => {
  let today = new Date();
  let givenDate = new Date(inputDate);

  let sameMonth =  givenDate.getMonth() == today.getMonth();
  let sameYear = givenDate.getFullYear() == today.getFullYear();


  switch (true) {
    case givenDate.toDateString() == today.toDateString():
      return 'Today';
    case sameYear && sameMonth && givenDate.getDate() == today.getDate() - 1:
      return 'Yesterday';
    case sameYear && sameMonth && givenDate.getDate() > today.getDate() - 7 && givenDate.getDate() < today.getDate() - 1:
      return 'This week';
    case sameYear && sameMonth && givenDate.getDate() == today.getDate() - 7:
      return 'Last week';
    case sameYear && sameMonth && givenDate.getDate() < today.getDate() - 7:
      return 'This month';
    case sameYear && givenDate.getMonth() == today.getMonth() - 1:
      return 'Last month';
    case sameYear:
      return 'This year';
    case givenDate.getFullYear() == today.getFullYear() - 1:
      return 'Last year';
    default:
      return 'Long time ago';
  }

};

const View = {
  init: () => {
    document.getElementById('relative-date-btn').addEventListener('click', () => {
      const msgElement = document.getElementById('relative-date-msg');
      const inputDateElem = document.getElementById('relative-date-input');
      msgElement.textContent = calculateRelativeDate(inputDateElem.value);
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);
export {calculateRelativeDate};
