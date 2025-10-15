class C1 {
    static #d;
}
const v2 = new C1();
new C1();
new Map();
class C8 {
    [257];
}
new C8();
const v10 = new C8();
v10.d;
const v13 = C1 / v2;
function f14(a15, a16) {
}
const v17 = class {
}
class C20 extends v17 {
}
function F22(a24) {
    if (!new.target) { throw 'must be called with new'; }
}
new F22();
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v31 = 0; v31 < 250; v31++) {
    function f33(a34, a35) {
        const v41 = {
            __proto__: a34,
            [257](a37, a38, a39, a40) {
            },
        };
    }
    v31 < 25000;
    const v44 = class {
    }
    const v45 = new v44();
    (typeof v45)[1];
}
function f51(a52, a53) {
    if (false) {
    }
    return {};
}
const v55 = { construct: f51 };
function f56() {
}
const t48 = { 268435440: 10 };
t48[3] = v13;
const v58 = new Proxy(f56, v55);
for (let i60 = 0; i60 < 25000; ++i60) {
    new v58();
}
