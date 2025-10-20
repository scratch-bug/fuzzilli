function f0() {
}
[f0,f0];
/(?:a+)?foo(?!bar)baz/dygvi;
[4294967297,-1,-1073741824,-13828,-10,4,9007199254740990];
[229.51249989466783,-1.7976931348623157e+308,-2.0,8.358559349069709e+307,300821.716847281,8.568741513056251e+307,2.0,776.7017499212052,-6.400427476873982e+307,-1000.0];
new Date();
new Int8Array(123);
function f14() {
    try {
        const v19 = Symbol.iterator;
        const v34 = {
            [v19]() {
                for (let i24 = 0, i25 = 10; i25; i25--) {
                }
                const v33 = {
                    next() {
                        return { done: 10 };
                    },
                };
                return v33;
            },
        };
        const v37 = new Int16Array();
        function f38() {
            for (let [i42, i43] = (() => {
                    0 / 0;
                    return [0, 10];
                })();
                ~i43, i43;
                i43--) {
            }
            const v50 = new Date(WeakSet, Date, 882, ...v37, ...v34);
            return v50;
        }
        f38();
        f38();
        %OptimizeFunctionOnNextCall(f38);
        f38();
        eval("function");
        const v56 = Symbol();
        v56(v56, f14, "function", eval, eval);
    } catch(e58) {
    }
    return eval;
}
({ next: f14 }).next();
