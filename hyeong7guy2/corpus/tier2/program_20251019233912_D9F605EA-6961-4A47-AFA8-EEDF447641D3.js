function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9(a10, a11, a12) {
            for (let i15 = 0, i16 = 10; i16;) {
                i16--;
                function F22(a24, a25) {
                    if (!new.target) { throw 'must be called with new'; }
                }
            }
            const v29 = Symbol.iterator;
            const v36 = {
                [v29]() {
                    Float32Array[6] >>>= 10;
                    for (let v32 = 0; v32 < 5; v32++) {
                    }
                    const v35 = {
                        next() {
                            return { done: 10 };
                        },
                    };
                    return v35;
                },
            };
            function f38() {
                new Date(WeakSet, Date, 882, ...v36, ...v36);
                return f9;
            }
            f38();
            return f9;
        }
        %OptimizeFunctionOnNextCall(f9());
    }
    new F5(a4, F1);
}
const v43 = new F1(Symbol, Symbol);
const v44 = new F1();
new F1(v44, v43);
