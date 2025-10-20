function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a3;
        }
        try {
            const v8 = new Uint8Array();
            v8[Symbol.toPrimitive] = f4;
            v8[31] = v8;
        } catch(e11) {
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v12 = new F0();
class C13 {
    static [v12](a15, a16, a17) {
    }
}
