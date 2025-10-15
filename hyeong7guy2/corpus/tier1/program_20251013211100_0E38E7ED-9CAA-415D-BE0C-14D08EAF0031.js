function f1(a2) {
    return a2;
}
const v6 = class extends BigUint64Array {
    toString(a8, a9) {
        do {
            try {
            } catch(e11) {
            }
            try { new Int32Array(); } catch (e) {}
        } while (0 < 3)
        return a8;
    }
}
new Uint8ClampedArray(262);
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
    function vuln() {
        let x = 1;
        new this();
        let z = 3;
        return x + z;
    }
}
const v28 = new F18();
new F18();
new F18();
const v31 = new F18();
function f32() {
    return v28;
}
function f34() {
    return 0;
}
const v35 = { b: Uint8ClampedArray };
const v36 = 0 in v35;
/a\fb\nc\rd\te\vf/mugsyd;
Symbol.iterator;
const v40 = {};
function F41() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 49853;
    this.c = 49853;
    this.f = 49853;
    function f44(a45, a46) {
        a45.p1;
        const v48 = {};
        return a45.p1;
    }
    const v51 = { p2: 1 };
    const v52 = {};
}
const v53 = new F41();
f32(v36);
function f55(a56, a57, a58, a59) {
}
try { f55(v53, v31, v35, v28); } catch (e) {}
class C64 {
    static get h() {
    }
    [Map](a67, a68, a69, a70) {
    }
}
const v71 = new C64();
try {
    Int32Array(0, 16, 0);
} catch(e76) {
}
const v78 = {
    get c() {
    },
};
const v80 = Object.create(v78);
function f81(a82, a83) {
    a82.toISOString = a83;
}
for (let i85 = 0; i85 < 20000; i85++) {
    const v92 = { a: 1 };
    const v95 = i85 % 2 ? v92 : v80;
    const v96 = {};
    0 < 5;
    function f100(a101) {
        if (a101) {
            const v103 = { p1: 1.1 };
        }
        const v104 = {};
        return { q1: v104 };
    }
    f100();
    f81(v95, v96, 0, C64, v71);
}
let victim = { a: 1.1 };
f81(victim, {});
