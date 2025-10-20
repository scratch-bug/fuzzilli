class C0 {
}
for (let i3 = 0, i4 = 10; i4; i4--) {
}
const v10 = C0.__lookupSetter__;
const v13 = ("currency").padEnd(167, v10);
function f14() {
    return v10;
}
class C15 extends f14 {
}
C15.calendar = v13;
try {
    Temporal.PlainDateTime.from(C15);
} catch(e19) {
}
