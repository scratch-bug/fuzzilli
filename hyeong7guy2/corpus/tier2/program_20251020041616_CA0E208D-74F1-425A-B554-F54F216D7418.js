const v0 = [-16,8,65535,-65536,-1,-9007199254740992,268435439,-14,1073741824];
function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = Symbol.iterator;
    const v15 = {
        [v9]() {
            const v14 = {
                next() {
                    return { done: 10 };
                },
            };
            return v14;
        },
    };
    let v16 = 882;
    v16--;
    const v19 = new Int16Array();
    function f20() {
        const v21 = new Date(WeakSet, Date, v16, ...v19, ...v15);
        v21.setFullYear(a4, v0);
        return f20;
    }
    %PrepareFunctionForOptimization(f20);
    %OptimizeFunctionOnNextCall(f20);
    f20();
}
new F1(F1, F1, F1);
new F1(F1, F1, v0);
new F1();
