function f2() {
    return 16;
}
class C3 {
    static #o(a5, a6) {
    }
    #m(a8) {
    }
}
new C3();
new C3();
function f11(a12) {
    const v15 = { p1: 1.1 };
    const v16 = {};
    const v17 = { q1: v16 };
    if (a12) {
    }
}
new C3();
function f19() {
}
const v24 = {
    next() {
        return {};
    },
};
let trigger = false;
class C28 {
}
function f30() {
    if (trigger) {
        eval("var y = 2.2;");
    }
    return {};
}
const v36 = new Proxy(C28, { construct: f30 });
const p = v36;
function f38() {
    let x = 1;
    const v41 = () => {
    };
    const closure = v41;
    const v43 = new p();
    Symbol.iterator;
    if (v43) {
        const v47 = {};
    }
    const v51 = { done: true };
    function F52(a54, a55) {
        if (!new.target) { throw 'must be called with new'; }
    }
    eval("");
    let z = 3;
    return x + z;
}
for (let i61 = 0; i61 < 25000; ++i61) {
    f38();
}
trigger = true;
f38();
