const v0 = class {
}
const v2 = new Set();
class C4 extends v0 {
}
const v5 = new C4();
function F7(a9) {
    if (!new.target) { throw 'must be called with new'; }
}
new F7();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v18 = 0; v18 < 250; v18++) {
    v18++;
    function f21(a22, a23) {
    }
    const v26 = v18 < 25000;
    try { v5.propertyIsEnumerable(); } catch (e) {}
    const v29 = class {
        static #p(a31) {
        }
    }
    try { v29(); } catch (e) {}
    const v35 = new v29();
    (typeof v35)[1];
    [1,2,v2,v0,v26];
}
function f44(a45, a46) {
    new a46();
}
const v48 = [];
let v49 = false;
function f50(a51, a52) {
    if (v49) {
    }
    return {};
}
const v54 = { construct: f50 };
function f55() {
}
const v56 = new Proxy(f55, v54);
for (let i58 = 0; i58 < 25000; ++i58) {
    f44(v48, v56);
}
v49 = true;
f44(v48, v56);
