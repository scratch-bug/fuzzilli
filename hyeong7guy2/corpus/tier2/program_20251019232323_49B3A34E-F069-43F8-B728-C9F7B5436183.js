for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        function f18() {
            function f19(a20) {
                return a20;
            }
            const v24 = new ArrayBuffer(6, { maxByteLength: 2309 });
            const v26 = new BigUint64Array(v24);
            function f28(a29) {
                return f19;
            }
            class C30 extends f28 {
            }
            try { C30.apply(-268435456, v26); } catch (e) {}
            function f33() {
                return f18;
            }
            WebAssembly.instantiateStreaming().catch(f33);
            return f19;
        }
        Object.defineProperty(this, "toString", { get: f18 });
    }
    const v36 = new F14(this, 6);
    class C37 {
        static [v36](a39, a40, a41) {
        }
    }
}
new F10();
