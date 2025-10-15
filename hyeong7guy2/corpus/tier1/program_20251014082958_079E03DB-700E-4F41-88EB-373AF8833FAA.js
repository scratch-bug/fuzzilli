function f1() {
    return 3;
}
const v2 = f1.apply();
function f3() {
    return f1;
}
class C4 extends f3 {
}
C4.calendar = v2;
try {
    Temporal.PlainDateTime.from(C4);
} catch(e8) {
}
