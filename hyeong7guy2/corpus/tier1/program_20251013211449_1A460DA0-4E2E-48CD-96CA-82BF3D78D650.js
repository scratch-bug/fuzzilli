function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1487986558;
    this.f = 1487986558;
}
const v3 = new F0();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
    this.h = a6;
    this.e = F0;
}
new F4(F4, F4);
new F4(F4, F0);
new F4(F4, F4);
const v11 = new F4(v3, v3);
class C12 {
    static get b() {
        return this(this, v11);
    }
    static set c(a16) {
    }
}
new C12();
new C12();
const v20 = Symbol.iterator;
const v29 = {
    [v20]() {
        let v22 = 10;
        const v28 = {
            next() {
                v22--;
                const v26 = v22 == 0;
                return { done: v26, value: v22 };
            },
        };
        return v28;
    },
};
[127,9007199254740991,-1759221443,-13,-4096,1,128,-7,10];
function f31() {
    return F4;
}
function f33(a34) {
    return a34;
}
const v38 = class extends BigUint64Array {
    toString(a40, a41) {
        do {
            try {
            } catch(e43) {
            }
            try { new Int32Array(); } catch (e) {}
        } while (0 < 3)
        return a40;
    }
}
new Uint8ClampedArray(262);
function F50(a52) {
    if (!new.target) { throw 'must be called with new'; }
    function vuln() {
        let x = 1;
        new this();
        a52?.g;
        v29.d ^= 1;
        function f59(a60) {
            return a60;
        }
        const v61 = class extends f59 {
        }
        let z = 3;
        return x + z;
    }
}
const v64 = new F50();
new F50();
new F50();
const v67 = new F50();
function f68() {
    return v64;
}
function f70() {
    return 0;
}
const v71 = { b: Uint8ClampedArray };
const v72 = 0 in v71;
/a\fb\nc\rd\te\vf/mugsyd;
Symbol.iterator;
const v76 = {};
function F77() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 49853;
    this.c = 49853;
    this.f = 49853;
    function f80(a81, a82) {
        a81.p1;
        const v84 = {};
        return a81.p1;
    }
    const v87 = { p2: 1 };
    const v88 = {};
}
const v89 = new F77();
f68(v72);
function f91(a92, a93, a94, a95) {
}
try { f91(v89, v67, v71, v64); } catch (e) {}
class C100 {
    static get h() {
    }
    [Map](a103, a104, a105, a106) {
    }
}
const v107 = new C100();
try {
    Int32Array(0, 16, 0);
} catch(e112) {
}
const v114 = {
    get c() {
    },
};
const v116 = Object.create(v114);
function f117(a118, a119) {
    a118.toISOString = a118;
}
for (let i121 = 0; i121 < 20000; i121++) {
    const v128 = { a: 1 };
    const v131 = i121 % 2 ? v128 : v116;
    const v132 = {};
    1 < 5;
    function f136(a137) {
        if (a137) {
            const v139 = { p1: 1.1 };
        }
        const v140 = {};
        return { q1: v140 };
    }
    f136();
    f117(v131, v132, 0, C100, v107);
}
let victim = { a: 1.1 };
f117(victim, {});
