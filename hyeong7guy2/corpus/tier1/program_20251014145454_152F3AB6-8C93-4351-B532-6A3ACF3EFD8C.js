function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
            }
            function F18(a20, a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
            }
            function f24() {
            }
            WebAssembly.instantiateStreaming(F18).catch(f24);
            function f27(a28) {
                const v29 = {};
                function f30(a31, a32, a33, a34) {
                    return f30;
                }
                class C35 {
                    static get d() {
                    }
                }
            }
            Object.defineProperty(this, "e", { get: f17, set: f27 });
            this.e = -1;
            class C38 extends WeakMap {
                #m(a40, a41) {
                }
            }
            class C42 extends C38 {
            }
        }
        new F11(a7, f6);
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
new F2();
