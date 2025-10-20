Object.defineProperty(Uint32Array, "signDisplay", { configurable: true, value: Uint16Array });
const v3 = class extends Uint32Array {
    constructor(a5) {
        super();
        -536870912 < 20000;
        const v9 = {};
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                function f15(a16) {
                    function f17() {
                        ("p").blink();
                        ("p").codePointAt();
                    }
                    f17();
                    f17();
                }
                f15();
                f15();
                %OptimizeMaglevOnNextCall(f15);
                return f15;
            }
            Object.defineProperty(this, "toString", { get: f14 });
        }
        const v25 = new F10();
        class C26 {
            static [v25](a28, a29, a30) {
            }
            static [v25](a32, a33, a34) {
            }
        }
    }
}
new v3();
