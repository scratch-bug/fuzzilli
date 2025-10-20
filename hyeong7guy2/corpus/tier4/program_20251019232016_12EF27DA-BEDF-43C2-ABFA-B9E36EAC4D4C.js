const v1 = class extends Date {
}
const v2 = new v1();
const v5 = Intl.DateTimeFormat;
const v7 = {};
Object.defineProperty(v7, "fractionalSecondDigits", { writable: true, configurable: true, value: 3 });
v5("os", v7).formatRange(v2, 3);
