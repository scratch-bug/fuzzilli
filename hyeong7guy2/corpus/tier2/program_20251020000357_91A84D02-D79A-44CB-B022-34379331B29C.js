function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        let v5 = 257;
        const v6 = v5++;
        const v8 = new Float32Array(v5);
        function f9(a10, a11) {
            let v13 = 10 >>> 10;
            v13--;
            return v13;
        }
        v8.valueOf = f9;
        v8[256] = v8;
        v8.toSorted();
        function f16(a17) {
            return v6;
        }
        return f16;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
