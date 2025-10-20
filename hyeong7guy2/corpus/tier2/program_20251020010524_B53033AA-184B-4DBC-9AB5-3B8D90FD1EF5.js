function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f9() {
                const v13 = new SharedArrayBuffer(8, { maxByteLength: 255 });
                const v14 = new Uint8Array(v13);
                const t7 = v14.constructor;
                new t7(v14);
            }
            ({ construct: f9 }).construct();
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F1();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
const v26 = class {
}
function f27() {
    const v29 = Intl.DateTimeFormat;
    v29("os", { timeZone: "h" });
}
Object.defineProperty(v26, Symbol.iterator, { value: f27 });
try { new Int32Array(v26); } catch (e) {}
