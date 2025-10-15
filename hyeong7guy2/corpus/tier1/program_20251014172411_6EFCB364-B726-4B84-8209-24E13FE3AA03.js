new Set();
const v4 = new WeakMap();
3 > 3;
new Uint32Array(3);
class C9 extends Uint32Array {
    set h(a11) {
        class C14 extends BigUint64Array {
        }
        function f15(a16, a17) {
            a16[0];
            Reflect.construct(a17, [a16]);
            return a16[0];
        }
    }
    get d() {
        return Uint32Array;
    }
}
const v25 = new C9();
try { v25.map(v25); } catch (e) {}
new C9();
const v28 = new C9();
function f29() {
    C9.d;
    {
    }
    function F31(a33, a34) {
        if (!new.target) { throw 'must be called with new'; }
        function f35() {
            function f36(a37) {
                let v38 = -1098098658;
                function F42(a44, a45) {
                    if (!new.target) { throw 'must be called with new'; }
                    a45++;
                    this.e = a45;
                }
                const v47 = new F42("2147483647", -3612);
                v47.b = "2147483647";
                new F42();
                let v49 = 30349n;
                ([])[4] | 7;
                ({"b":v49,"e":v38,...Int32Array} = v47);
            }
            f36();
            f36();
            %OptimizeMaglevOnNextCall(f36);
            return f36;
        }
        Object.defineProperty(this, "toString", { get: f35 });
    }
    const v56 = new F31(F31, F31);
    class C57 {
        static [v56](a59, a60, a61) {
        }
    }
    return v4;
}
v28.constructor = f29;
const v62 = v28?.constructor;
try { new v62(); } catch (e) {}
65348 >>> 65348;
const v67 = class {
}
const v68 = class extends v67 {
}
v68.name;
v68[65348] = v68;
gc.d = WeakMap;
gc.d = gc;
gc();
let v74 = %WasmStruct();
({"d":v74,"e":Int32Array,...v74} = v68);
Object.defineProperty(v68, 0, { writable: true, value: v67 });
const v75 = {};
