function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                const v12 = [1073741825,64569,536870888,3473,9007199254740991,859678970,-1073741824,9007199254740990];
                const v17 = new ArrayBuffer(64, { maxByteLength: 65536 });
                const v18 = new Int8Array(v17);
                v18.set(v12);
            }
            new F8();
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v21 = new F1();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
