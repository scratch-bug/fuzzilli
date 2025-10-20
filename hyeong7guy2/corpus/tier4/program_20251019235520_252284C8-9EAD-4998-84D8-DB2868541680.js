const v1 = [256,-2147483648,8,2,-2371];
function f2(a3, a4) {
    return a3;
}
v1[Symbol.toPrimitive] = f2;
const t5 = Intl.Locale;
const v8 = new t5(v1);
Intl["getCanonicalLocales"](v8);
