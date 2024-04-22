// 6. Домашнє завдання
// Створіть клас MyButton, який приймає 2 параметри у вигляді тексту (text) та класу кнопки (btnClass). 
// Опишіть метод show(), який виводить методом document.write() екземпляр кнопки в тіло HTML-сторінки.
//  Передбачте гетер і сетер, які дозволяють отримати та змінити властивість value кнопки, 
//  яка насправді змінює її властивість-text.
// Опишіть у стиляхкілька класів для сторінки, які дозволять створити різні екземпляри кнопок.
// Виведіть кілька кнопок шляхом show(), для однієї з них змініть текст:
// Створіть клас ColorButton, який успадковує клас MyButton, додавши до нього додатковий клас, 
// який дозволяє змінювати колір фону та текст кнопки, додаючи до екземпляра ColorButton крім 
// основного ще й додатковий клас. Наприклад, екземпляр ColorButton буде викликатись за такими 

class MyButton {
  constructor(text, btnClass) {
    this._text = text;
    this._btnClass = btnClass;
  }

  show() {
    document.write(`<button type="button" class="${this._btnClass}">${this._text}</button>`);
  }

  get value() {
    return this._text;
  }

  set value(newValue) {
    this._text = newValue;
  }
}

class ColorButton extends MyButton {
  constructor(text, btnClass, colorClass) {
    super(text, btnClass);
    this._colorClass = colorClass;
  }

  show() {
    document.write(`<button type="button" class="${this._btnClass} ${this._colorClass}">${this._text}</button>`);
  }

  get colorClass() {
    return this._colorClass;
  }

  set colorClass(newColorClass) {
    this._colorClass = newColorClass;
  }
}

const btn_1 = new ColorButton("Text", "btn", "btn-success");
const btn_2 = new ColorButton("Text", "btn");
const btn_3 = new ColorButton("Text", "btn");
const btn_4 = new ColorButton("Text", "btn", "btn-danger");

btn_1.value = "Save Progress";
btn_2.value = "Click Me";
btn_3.value = "Download";
btn_4.value = "See More";

