const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v0;
    this.b = v0;
}
const v3 = new F1();
new F1();
const v5 = new F1();
class C6 {
    static [v5](a8) {
        Math.trunc(1059607828);
        Math.sign(this);
        Math.cos(1059607828);
        const v14 = a8 << 1059607828;
        Math.pow(this, v14);
        v14 % 1059607828;
        return ~v14;
    }
}
new C6();
new C6();
new C6();
new C6();
class C22 {
    m(a24, a25) {
        Intl.RelativeTimeFormat;
        new Intl();
        return v3;
    }
}
new C22();
new C22();
new C22();
new C22();
let v34 = -1;
const v36 = [-6,-6,-6,-6,2.2250738585072014e-308];
e = 3;
function f39(a40, a41, a42) {
    return a41;
}
f39(e);
const v45 = new Int16Array(3);
const v67 = {
    [Symbol]() {
        let v48 = 10;
        const v64 = {
            next() {
                v48--;
                const v52 = v48 == 0;
                const v55 = {
                    b: v52,
                    value: v48,
                    [v52]() {
                        v34 = this;
                    },
                    get a() {
                    },
                };
                return v55;
            },
            valueOf(a57, a58) {
            },
            maxByteLength: 3,
            p(a60, a61, a62, a63) {
            },
        };
        return v64;
    },
    set g(a66) {
    },
    imp: v45,
    a: e,
    imp: v36,
};
[-16.701474373147676,-1e-15,NaN,901867.897609097,1.0,2.2250738585072014e-308,2.220446049250313e-16,-1000000000000.0];
Map.valueOf = Symbol;
function f71() {
    return 750;
}
f71.valueOf = f71;
class C72 extends f71 {
}
function f73() {
    return C72;
}
Object.defineProperty(f73, "initial", { value: C72 });
const t87 = WebAssembly.Memory;
const v76 = new t87(f73);
const v77 = {};
function f78(a79) {
    return a79;
}
Object.defineProperty(v77, "p1", { set: f78 });
function f80(a81) {
    v77.p1 = a81;
}
for (let i83 = 0;
    (() => {
        const v85 = i83 < 20000;
        for (let i88 = 0, i89 = 10; i88;) {
        }
        return v85;
    })();
    ++i83) {
    f80(2.2);
}
try { v76.grow(Map); } catch (e) {}
