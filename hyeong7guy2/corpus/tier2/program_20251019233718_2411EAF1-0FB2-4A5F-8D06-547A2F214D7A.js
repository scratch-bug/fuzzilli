function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                const v12 = [268435440,-812079670,14,268435441];
                const v17 = new ArrayBuffer(64, { maxByteLength: 65536 });
                const v18 = new Int8Array(v17);
                v18.set(v12);
            }
            new F8(a3, this);
            return a7;
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v21 = new F1(F1, Int8Array);
class C22 {
    static [v21](a24, a25, a26) {
    }
}
