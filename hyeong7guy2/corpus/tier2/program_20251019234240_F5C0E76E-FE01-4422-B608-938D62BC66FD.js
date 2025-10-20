const v4 = Symbol.iterator;
const v10 = {
    [v4]() {
        const v9 = {
            next() {
                return { done: 10 };
            },
        };
        return v9;
    },
};
const v12 = new Int16Array(Symbol);
const v13 = new Date(WeakSet, Date, 12, ...v12, ...v10);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v19 = 0; v19 < 5; v19++) {
        function f20() {
            const v21 = Symbol.iterator;
            const v30 = {
                [v21]() {
                    function f23(a24, a25, a26) {
                        return v21;
                    }
                    const v29 = {
                        next() {
                            return { done: f23 };
                        },
                    };
                    return v29;
                },
            };
            const v32 = new Int16Array(v19, 882, 882);
            new Date(WeakSet, Date, 882, ...v32, ...v30);
            return v12;
        }
        f20();
        %OptimizeFunctionOnNextCall(f20);
    }
}
new F14(Symbol, v13, v10);
