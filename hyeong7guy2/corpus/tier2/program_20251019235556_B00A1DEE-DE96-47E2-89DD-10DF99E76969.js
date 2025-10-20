function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        class C11 extends Uint16Array {
        }
        class C12 extends C11 {
        }
        function f13(a14) {
            return a3;
        }
        Object.defineProperty(C12, "constructor", { configurable: true, enumerable: true, value: f13 });
        const v15 = class {
        }
        function F16(a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            function f20() {
                return this;
            }
            %PretenureAllocationSite(this);
            const v22 = Symbol.dispose;
            const v24 = {
                [v22]() {
                },
            };
            using v25 = v24;
            a19.constructor = f20;
            function f26() {
                const v28 = ("🙌🏿").fontsize();
                v28.replaceAll(v28[14]);
            }
            ({ construct: f26 }).construct();
        }
        new F16(v15, C12);
    }
    new F4();
    %OptimizeFunctionOnNextCall(F0);
}
new F0();
new F0();
new F0();
