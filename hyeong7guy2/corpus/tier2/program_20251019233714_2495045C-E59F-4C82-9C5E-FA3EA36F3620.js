try {
    function f2() {
        return f2;
    }
    function f3() {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            function f8(a9, a10, a11) {
                function f12() {
                    return a10;
                }
                function f13() {
                    function f14() {
                        gc();
                        return { done: true };
                    }
                    return { next: f14 };
                }
                const v20 = Symbol.iterator;
                const v23 = f12.bind(null, ...{ [v20]: f13 });
                function F24(a26, a27, a28, a29) {
                    if (!new.target) { throw 'must be called with new'; }
                    class C31 extends Array {
                        static {
                            new this();
                        }
                        static [-5.2394879957260105](a35) {
                        }
                    }
                }
                new F24(f3, f3, this, v23);
                return f13;
            }
            f8(f3, F4, F4);
            %OptimizeFunctionOnNextCall(f8);
        }
        new F4();
        const v39 = new F4();
        const t38 = v39.constructor;
        new t38();
        return f3;
    }
    const v42 = Symbol.iterator;
    f2.bind(null, ...{ [v42]: f3 });
} catch(e46) {
}
