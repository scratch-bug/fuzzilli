class C2 extends Uint32Array {
}
function f3() {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            const v11 = new Uint16Array(512);
            v11.includes(9223372036854775807);
            return v11;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v13 = new F4();
    class C14 {
        static [v13](a16, a17, a18) {
        }
    }
    return f3;
}
C2.constructor = f3;
const v19 = C2.constructor;
try { v19(); } catch (e) {}
