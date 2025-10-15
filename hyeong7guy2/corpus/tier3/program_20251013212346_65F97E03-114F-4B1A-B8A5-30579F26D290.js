const v0 = class {
    static #n(a2, a3, a4, a5) {
        return a3;
    }
    static {
    }
    static set h(a8) {
    }
}
new v0();
new v0();
function F14() {
    if (!new.target) { throw 'must be called with new'; }
}
new F14();
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
new F17();
new Uint8ClampedArray(262);
const v25 = {};
class C28 {
    static get h() {
    }
    [Map](a31, a32, a33, a34) {
    }
}
const v36 = {
    get c() {
    },
};
function f38(a39, a40) {
    a39.toISOString = a39;
}
for (let i42 = 0; i42 < 20000; ++i42) {
    const v49 = { a: 1 };
    i42 % 2;
    const v52 = {};
    function f53(a54) {
        if (a54) {
            const v55 = {};
        }
        const v56 = {};
    }
}
let victim = {};
const v59 = {};
f38(victim);
