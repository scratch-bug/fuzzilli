const v2 = [9.48169576751447,2.0,1000000000.0,2.220446049250313e-16,6.615849216498318e+307,0.4870582948997638,-5.0];
const v3 = [null,v2,v2,false,v2];
function f9() {
    return v3;
}
const v10 = [-891154888,9,127,1073741824,-65536,-9007199254740990,716153362,2147483648,-49503,4];
new BigUint64Array(1054);
new WeakMap();
function f17() {
    return WebAssembly;
}
f17.d = f17;
const v19 = WebAssembly.instantiateStreaming().catch(f17);
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    let v24;
    try { v24 = new f9(...v3, ...a22, ...v10, ...this); } catch (e) {}
    try { new v24(v24, ...a23, a23, a22); } catch (e) {}
    WebAssembly.toString = f9;
    try { this.toString(); } catch (e) {}
    a22 ?? a22;
    function f30() {
        function f31(a32, a33, a34) {
            a34.length = a34;
            DataView.length = DataView;
            const v36 = DataView.prototype;
            let v37;
            try { v37 = v36.getFloat64(); } catch (e) {}
            const v38 = v37 ?? v37;
            function F39(a41) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v43 = new Int8Array(v19, a23, a32);
            function F44(a46, a47) {
                if (!new.target) { throw 'must be called with new'; }
                let v45 = this;
                ({"buffer":v45,"byteLength":F39,"length":a47,} = v43);
            }
            let v48;
            try { v48 = v36.getInt8(); } catch (e) {}
            v48 ?? v48;
            function F50(a52, a53) {
                if (!new.target) { throw 'must be called with new'; }
                v48();
            }
            Object.defineProperty(this, 1265203758, { configurable: true, enumerable: true, get: f31 });
            typeof v38 === "function";
            return v36;
        }
        %OptimizeMaglevOnNextCall(f31);
        f31(f31, v19, F20);
        function f60(a61) {
            a61 ?? a61;
        }
        return f60;
    }
    gc({ execution: "async", type: "major" });
    try { new f30(); } catch (e) {}
    Object.defineProperty(this, "toString", { get: f30 });
}
try { new F20(268435440n, 268435440n); } catch (e) {}
const v70 = new F20();
const v71 = v70?.toString;
try { new v71(16); } catch (e) {}
class C73 {
    static [v70](a75, a76, a77) {
    }
    static [v70](a79, a80, a81) {
    }
}
