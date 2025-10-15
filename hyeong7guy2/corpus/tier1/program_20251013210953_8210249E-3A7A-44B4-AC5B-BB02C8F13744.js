new Uint8ClampedArray(262);
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
const v6 = new F3(262);
new F3();
new F3();
const v9 = new F3();
function f10() {
    return v6;
}
function f12() {
    return 0;
}
const v13 = {};
0 in v13;
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 49853;
    this.c = 49853;
}
const v18 = new F15();
function f19(a20, a21, a22, a23) {
}
try { f19(v18, v9, v13); } catch (e) {}
new F15();
class C28 {
    [Map](a30, a31, a32, a33) {
    }
}
new C28();
const v35 = new C28();
new C28();
const v39 = Object.create({});
function f40(a41, a42) {
    a41.toISOString = a42;
}
for (let i44 = 0; i44 < 20000; i44++) {
    const v51 = { a: 1 };
    const v54 = i44 % 2 ? v51 : v39;
    f40(v54, {}, 0, C28, v35);
}
const v59 = {};
