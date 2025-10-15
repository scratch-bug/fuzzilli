const v1 = Symbol.iterator;
const v10 = {
    [v1]() {
        let v3 = 10;
        const v9 = {
            next() {
                v3--;
                const v7 = v3 == 0;
                return { done: v7, value: v3 };
            },
        };
        return v9;
    },
};
[1.2972927199783651e+308];
const v13 = Symbol.iterator;
const v22 = {
    [v13]() {
        let v15 = 10;
        const v21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                return { done: v19, value: v15 };
            },
        };
        return v21;
    },
};
new Uint8Array(191);
new Float64Array(10);
new Uint32Array();
function f37() {
    return 181;
}
function f42(a43) {
    return a43;
}
const v47 = class extends BigUint64Array {
    toString(a49, a50) {
        do {
            try {
            } catch(e52) {
            }
            try { new Int32Array(); } catch (e) {}
        } while (0 < 3)
        return a49;
    }
}
const v58 = new Uint8ClampedArray();
function F59(a61) {
    if (!new.target) { throw 'must be called with new'; }
    function vuln() {
        let x = 1;
        new this();
        [];
        const v67 = class {
            static {
                const v69 = this <= this;
                function f70() {
                    return f70;
                }
                const v71 = { f: f70 };
                if (v69) {
                } else {
                }
            }
        }
        const v72 = class {
        }
        try { v72.constructor(); } catch (e) {}
        class C76 extends Set {
        }
        new C76();
        new C76();
        const v79 = class {
        }
        const v80 = new v79();
        function F81(a83, a84, a85) {
            if (!new.target) { throw 'must be called with new'; }
            a83.g = a83;
        }
        Object.defineProperty(Object, 512, { configurable: true, get: vuln, set: vuln });
        Temporal.Duration.from();
        new F81(v80);
        for (let i92 = 0; i92 < 20000; ++i92) {
            try { Symbol(); } catch (e) {}
            function f105(a106, a107, a108, a109) {
            }
            (2.2).push(...[3.3,4.4]);
        }
        const v114 = {};
        let z = 3;
        x + z;
    }
}
new F59();
new F59();
new F59();
function f121() {
}
function f123() {
    new ArrayBuffer(16, { maxByteLength: 16 });
    new DataView();
    return 0;
}
0 in {};
/a\fb\nc\rd\te\vf/mugsyd;
const v135 = {};
function F136() {
    if (!new.target) { throw 'must be called with new'; }
    v135.b = 49853;
    this.c = 49853;
    this.f = 49853;
    function f139(a140, a141) {
        const v144 = {
            get f() {
                const v143 = %WasmArray();
            },
        };
        return a140.p1;
    }
    const v147 = { p2: 1 };
    const v148 = {};
}
function f149(a150, a151, a152, a153) {
}
class C157 {
    static get h() {
    }
    [Map](a160, a161, a162, a163) {
    }
}
const v164 = new C157();
try {
    Int32Array(0, 16, 0);
} catch(e169) {
}
const v171 = {
    get c() {
    },
};
const v173 = Object.create(v171);
function f174(a175, a176) {
    a175.toISOString = a176;
}
for (let i178 = 0; i178 < 20000; i178++) {
    const v185 = { a: 64 };
    i178 % 2 ? v185 : v173;
    const v189 = {};
    0 < 5;
    function f193(a194) {
        if (a194) {
            const v195 = {};
            const v196 = `
                a194?.__proto__;
            `;
            eval(v196);
        }
        const v200 = {};
        const v212 = {
            o(a202, a203) {
                function f204(a205, a206, a207) {
                    const v210 = {
                        set h(a209) {
                        },
                    };
                }
                f174(a194, v58, v164);
            },
        };
    }
    f193();
}
let victim = {};
const v217 = {};
