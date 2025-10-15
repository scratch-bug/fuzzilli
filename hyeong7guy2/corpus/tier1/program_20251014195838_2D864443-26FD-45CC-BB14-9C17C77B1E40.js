const v2 = ("currency").padEnd(167);
function f3() {
    return v2;
}
class C4 extends f3 {
}
C4.calendar = v2;
try {
    Temporal.PlainDateTime.from(C4);
} catch(e8) {
}
