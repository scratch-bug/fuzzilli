function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = Symbol.iterator;
    const v26 = {
        [v9]() {
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                try { a13(); } catch (e) {}
                a13.o(this, a13);
                function f17() {
                    const v18 = { a: a13 };
                    return F0;
                }
            }
            new F11(this);
        },
        o(a21, a22, a23, a24) {
            a22.o(a24);
            return a4;
        },
    };
    const v29 = new Int16Array();
    function f30() {
        let v31;
        try { v31 = new Date(WeakSet, Date, 882, ...v29, ...v26); } catch (e) {}
        return v31;
    }
    f30();
    %PrepareFunctionForOptimization(f30);
    %OptimizeFunctionOnNextCall(f30);
    f30();
}
new F0(F0, F0, F0, F0);
