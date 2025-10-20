const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F8(a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                const v12 = [1073741825,64569,536870888,3473,9007199254740991,859678970,-1073741824,9007199254740990];
                v12[5] = v12;
                const v17 = new ArrayBuffer(64, { maxByteLength: 65536 });
                const v19 = new Uint32Array(v17);
                v19.set(v12);
            }
            const v21 = v0.constructor;
            try { v21(this); } catch (e) {}
            new F8();
        }
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v24 = new F1();
class C25 {
    static [v24](a27, a28, a29) {
    }
}
