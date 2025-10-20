function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = class {
    }
    const v5 = {};
    function f6() {
        return false;
    }
    Object.defineProperty(v5, "getOwnPropertyDescriptor", { configurable: true, enumerable: true, get: f6, set: f6 });
    this.f = -12;
}
new F0();
new F0();
const v11 = [-2];
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    function f17() {
        function f18(a19) {
            const v22 = f18[4] >>> 7;
            for (let v23 = 0; v23 < 5; v23++) {
                const v24 = Array(v22);
                try { v24.findLast(); } catch (e) {}
            }
        }
        %OptimizeMaglevOnNextCall(f18);
        return f18;
    }
    Object.defineProperty(this, "toString", { get: f17 });
}
const v26 = new F13();
v26.toString();
class C28 {
    static [v26](a30, a31, a32) {
    }
    static [v26](a34, a35, a36) {
    }
}
let v37 = 4;
new Uint8ClampedArray(v37);
class C40 extends F0 {
    static [v37](a42, a43, a44) {
        v37 = a43;
        return v11;
    }
    static [v11](a46, a47) {
    }
}
new C40();
new C40();
new C40();
const v52 = [9,9223372036854775807,512,-16,-7];
for (let i54 = 0; i54 < 20000; i54++) {
    const v61 = new Set(v52);
    const v63 = [v52];
    Reflect.apply(v61.has, v61, v63);
}
async function f66(a67, a68) {
    const v69 = Symbol.asyncDispose;
    function f70() {
        return a67;
    }
    const v71 = { f: f70 };
    const v74 = new Uint32Array(3441);
    v74.includes(NaN);
    const v78 = {
        [v69]() {
        },
    };
}
f66();
const v81 = new Int8Array();
for (let v82 = 0; v82 < 100; v82++) {
    f66(Int8Array, v82);
}
function f84(a85) {
    const v87 = { execution: "async" };
    for (let i99 = (() => {
            return WebAssembly;
            function F89(a91, a92) {
                if (!new.target) { throw 'must be called with new'; }
                function f93() {
                    function f94(a95) {
                        function f97() {
                        }
                    }
                    return f94;
                }
            }
            return 0;
        })();
        i99 < 25000;
        (() => {
            function F103(a105, a106, a107, a108) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f111() {
                return Symbol;
            }
            function f112() {
                const t7 = Temporal.PlainTime;
                const v115 = new t7();
                v115.round("8461");
            }
            function f117(a118) {
            }
            try {
            } finally {
            }
        })()) {
        [i99,i99];
    }
}
Object.defineProperty(v81, "valueOf", { configurable: true, enumerable: true, value: f84 });
v81[8] = v81;
