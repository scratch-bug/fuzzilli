new Uint32Array(181);
function f6() {
    return 181;
}
function f11(a12) {
    return a12;
}
const v16 = class extends BigUint64Array {
    toString(a18, a19) {
        do {
            try {
            } catch(e21) {
            }
            try { new Int32Array(); } catch (e) {}
        } while (0 < 3)
        return a18;
    }
}
const v27 = new Uint8ClampedArray(262);
function F28(a30) {
    if (!new.target) { throw 'must be called with new'; }
    function vuln() {
        let x = 1;
        new this();
        [];
        const v36 = class {
            static {
                const v38 = this <= this;
                function f39() {
                    return f39;
                }
                const v40 = { f: f39 };
                if (v38) {
                } else {
                }
            }
        }
        const v41 = class {
        }
        try { v41.constructor(); } catch (e) {}
        class C45 extends Set {
        }
        new C45();
        new C45();
        const v48 = class {
        }
        const v49 = new v48();
        function F50(a52, a53, a54) {
            if (!new.target) { throw 'must be called with new'; }
            a52.g = a52;
        }
        new F50(v49);
        for (let i57 = 0; i57 < 20000; ++i57) {
            const v65 = [1.1,2.2];
            try { Symbol("number"); } catch (e) {}
            function f71(a72, a73, a74, a75) {
            }
            v65.push(...[3.3,4.4]);
        }
        const v80 = {};
        let z = 3;
        return x + z;
    }
}
const v84 = new F28();
new F28();
new F28();
const v87 = new F28();
function f88() {
    return v84;
}
function f90() {
    -2n >> 181;
    const v96 = new ArrayBuffer(16, { maxByteLength: 16 });
    new DataView(v96);
    return 0;
}
const v99 = { b: Uint8ClampedArray };
const v100 = 0 in v99;
/a\fb\nc\rd\te\vf/mugsyd;
Symbol.iterator;
const v104 = {};
function F105() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 49853;
    this.c = 49853;
    this.f = 49853;
    function f108(a109, a110) {
        a109.p1;
        const v115 = {
            get f() {
                const v113 = %WasmArray();
                return v100;
            },
        };
        return a109.p1;
    }
    const v118 = { p2: 1 };
    const v119 = {};
}
const v120 = new F105();
f88(v100);
function f122(a123, a124, a125, a126) {
}
try { f122(v120, v87, v99, v84); } catch (e) {}
class C131 {
    static get h() {
    }
    [Map](a134, a135, a136, a137) {
    }
}
const v138 = new C131();
try {
    Int32Array(0, 16, 0);
} catch(e143) {
}
const v145 = {
    get c() {
    },
};
const v147 = Object.create(v145);
function f148(a149, a150) {
    a149.toISOString = a150;
}
for (let i152 = 0; i152 < 20000; i152++) {
    const v159 = { a: 1 };
    const v162 = i152 % 2 ? v159 : v147;
    const v163 = {};
    0 < 5;
    function f167(a168) {
        if (a168) {
            const v170 = {};
        }
        const v171 = {};
        const v183 = {
            q1: v171,
            o(a173, a174) {
                function f175(a176, a177, a178) {
                    const v181 = {
                        set h(a180) {
                        },
                    };
                }
                f175(a168, v27, v138);
            },
        };
    }
    f167();
    f148(v162, v163, 0, C131, v138);
}
let victim = { a: 1.1 };
f148(victim, {});
