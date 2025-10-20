class C3 {
    static [1000000.0]() {
    }
    [1000000.0]() {
    }
    #valueOf(a7, a8, a9) {
    }
    c;
}
const v10 = new C3();
function f13() {
    function f14(a15) {
        const v16 = async () => {
            const v18 = new Uint8Array(1);
            try {
                await WebAssembly.instantiate(v18);
            } catch(e22) {
            }
            return v18;
        };
        v16();
        Object.defineProperty(v10, f14, { writable: true, configurable: true, enumerable: true, set: f13 });
        return Symbol;
    }
    f14.toString = f14;
    return f14;
}
new Int32Array(127);
try {
    const v62 = new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0]);
    const t30 = WebAssembly.Module;
    const v65 = new t30(v62);
    function f66() {
        return v65;
    }
    const v67 = { f: f66 };
    const v68 = { m: v67 };
    const t37 = WebAssembly.Instance;
    const v70 = new t37(v65, v68);
    const v72 = v70.exports.main;
    for (let i74 = 0;
        (() => {
            try { v72(); } catch (e) {}
            return i74 < 20000;
        })();
        i74++) {
    }
    WebAssembly(v62, v70, 0);
} catch(e82) {
}
function f83() {
}
function F84(a86, a87) {
    if (!new.target) { throw 'must be called with new'; }
    function f88() {
        function f89(a90) {
            function f91() {
            }
            const v92 = {};
        }
    }
}
const v93 = new F84(F84, F84);
class C94 {
    static [v93](a96, a97, a98) {
    }
}
function f99() {
}
function F100(a102, a103) {
    if (!new.target) { throw 'must be called with new'; }
    function f104() {
        function f105(a106) {
            new Uint32Array(this, a103, a106);
            const v110 = class {
                static get e() {
                    class C112 extends Uint32Array {
                        valueOf(a114, a115, a116) {
                        }
                    }
                }
            }
        }
        function f117() {
            const v118 = {};
        }
        const v119 = { next: f117 };
    }
}
