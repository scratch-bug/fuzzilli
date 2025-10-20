function f2(a3) {
    return a3;
}
function f4(a5) {
    return "join";
}
f2[Symbol.toPrimitive] = f4;
function f8() {
    return "object";
}
class C9 extends f8 {
}
C9.firstDayOfWeek = f2;
const v11 = Intl.Locale;
v11[Symbol.toPrimitive] = f8;
const v13 = new v11(v11, C9);
v13.getHourCycles();
