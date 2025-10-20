function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
        }
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const t12 = globalThis.performance.measureMemory;
            t12();
        }
        new F10();
        function f20() {
            function F21(a23, a24, a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
                function f27() {
                    return F3;
                }
                class C29 extends WeakMap {
                }
                Object.defineProperty(C29, "valueOf", { writable: true, enumerable: true, value: f27 });
                for (const v30 in C29) {
                }
            }
            new F21();
        }
        WebAssembly.instantiateStreaming().catch(f20);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v34 = new F3();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
