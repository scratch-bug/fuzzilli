function f2() {
    return "object";
}
const v4 = Intl.Locale;
v4[Symbol.toPrimitive] = f2;
const v6 = new v4(v4);
v6.e = v6;
