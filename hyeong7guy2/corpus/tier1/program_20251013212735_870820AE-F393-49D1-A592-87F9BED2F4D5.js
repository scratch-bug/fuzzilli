Symbol.iterator;
const v4 = class extends WeakSet {
    set c(a6) {
    }
    static set f(a8) {
    }
}
function F9() {
    if (!new.target) { throw 'must be called with new'; }
}
function F11(a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
}
new F11();
for (let i18 = 0; i18 < 20000; i18++) {
}
const v24 = {};
class C25 extends F9 {
}
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v4;
    this.f = a31;
}
new F26(v4, F26, 35169, 35169);
new F26();
class C35 {
}
function f37(a38, a39) {
    if (false) {
    }
    const v40 = new a38();
    return v40;
}
const v42 = new Proxy(C35, { construct: f37 });
function f43() {
    new v42();
}
for (let i49 = 0; i49 < 25000; ++i49) {
    f43();
}
