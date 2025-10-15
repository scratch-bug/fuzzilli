const v0 = class {
    static {
    }
    static set h(a3) {
    }
}
new v0();
const v5 = new v0();
[v0,v0,v5];
function F7() {
    if (!new.target) { throw 'must be called with new'; }
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F7;
}
new F10(F10);
Symbol.iterator;
const v17 = {};
class C19 {
}
const v22 = Object.create({});
function f23(a24, a25) {
}
for (let i27 = 0; i27 < 20000; ++i27) {
    const v34 = {};
    const v36 = {};
    1 < 5;
    function f40(a41) {
        const v42 = {};
        const v43 = { q1: v42 };
    }
    f40();
    f23(v22, v36, 0, C19);
}
let victim = {};
