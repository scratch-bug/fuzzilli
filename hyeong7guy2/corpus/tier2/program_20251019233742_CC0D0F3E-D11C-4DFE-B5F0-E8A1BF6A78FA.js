function f3(a4) {
    const v8 = new SharedArrayBuffer(3, { maxByteLength: 7 });
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        function f13() {
            function f14(a15) {
            }
            const v17 = new Int8Array(v8);
            v17.fill();
            return f14;
        }
        Object.defineProperty(this, "toString", { get: f13 });
    }
    const v19 = new F9(3, v8);
    class C20 {
        static [v19](a22, a23, a24) {
        }
    }
}
function F25(a27) {
    if (!new.target) { throw 'must be called with new'; }
}
F25[Symbol.toPrimitive] = f3;
const v32 = {
    o(a30, a31) {
        super[F25] = 12234;
        return F25;
    },
};
v32.o();
