function f1() {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function f8(a9) {
            }
            const v14 = new SharedArrayBuffer(127, { maxByteLength: 536870912 });
            const v16 = new BigUint64Array(v14);
            v16.sort();
            return f8;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v18 = new F3();
    class C19 {
        static [v18](a21, a22, a23) {
        }
    }
    Temporal.toString = f1;
    const t19 = Temporal.Duration;
    const v25 = new t19();
    v25.largestUnit = Temporal;
    try { v25.round(v25); } catch (e) {}
    return f1;
}
ArrayBuffer.valueOf = f1;
new ArrayBuffer(ArrayBuffer);
