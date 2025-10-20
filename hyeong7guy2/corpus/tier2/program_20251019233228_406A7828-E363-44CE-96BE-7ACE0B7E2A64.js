function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v9 = `
        `;
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17(a18) {
                return -9007199254740990 >> v9;
            }
            Object.defineProperty(this, "e", { get: Symbol, set: f17 });
            this.e = -1;
        }
        new F11(Symbol, F11, v9, F1);
        return F1;
    }
    f5(a3, a4, this);
    %OptimizeFunctionOnNextCall(f5);
}
new F1();
new F1();
new F1();
