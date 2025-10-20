for (let i2 = 0, i3 = 10; i3; i3--) {
}
const v9 = class {
}
class C10 extends v9 {
    static {
        function F12(a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                function f17(a18) {
                    for (let v19 = 0; v19 < 5; v19++) {
                        ("p" + v19)[8];
                    }
                }
                f17();
                f17();
                %OptimizeMaglevOnNextCall(f17);
                return f17;
            }
            Object.defineProperty(this, "toString", { get: f16 });
        }
        const v25 = new F12();
        class C26 {
            static [v25](a28, a29, a30) {
            }
        }
    }
}
