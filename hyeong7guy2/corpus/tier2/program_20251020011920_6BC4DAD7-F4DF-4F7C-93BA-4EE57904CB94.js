function f1() {
}
function f2() {
    function f3() {
        for (let i = 0; i < 5; i++) {
            function F4(a6, a7) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i10 = 0, i11 = 10; i11; i11--) {
                }
                function F17(a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f21() {
                        function f22(a23) {
                            function F24(a26, a27) {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                            typeof F24;
                        }
                        %OptimizeMaglevOnNextCall(f22);
                        return f22;
                    }
                    Object.defineProperty(this, "toString", { get: f21 });
                }
                const v29 = new F17();
                class C30 {
                    static [v29](a32, a33, a34) {
                    }
                }
            }
            new F4();
        }
        return { done: true };
    }
    return { next: f3 };
}
const v39 = Symbol.iterator;
f1.bind(null, ...{ [v39]: f2 });
