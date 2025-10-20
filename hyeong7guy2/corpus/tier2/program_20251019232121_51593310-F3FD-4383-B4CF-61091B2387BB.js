function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = a6 >>> a6;
            Uint8Array.of(a2, Uint8Array, Uint8Array).toBase64().charAt(v7);
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { configurable: true, get: f4 });
}
const v12 = new F0();
class C13 {
    static [v12](a15, a16, a17) {
    }
    static [v12](a19, a20, a21) {
    }
}
