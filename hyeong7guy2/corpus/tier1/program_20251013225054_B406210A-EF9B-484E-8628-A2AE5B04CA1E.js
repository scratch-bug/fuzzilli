class C1 {
}
new C1();
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
new F3(C1, C1, C1);
class C9 extends F3 {
}
new C9();
class C11 {
}
const t12 = Intl.NumberFormat;
t12();
function f17() {
}
[f17,f17,C11,437216893n];
const v22 = {};
const v24 = Object.create(Object);
for (let i26 = 0; i26 < 20000; i26++) {
    const v32 = {};
    const v35 = i26 % 2 ? v32 : v24;
    const v36 = {};
    if (f17) {
    }
    const v37 = {};
    v35.toISOString = v36;
}
const v38 = {};
