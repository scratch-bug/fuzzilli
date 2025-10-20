for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            function f6(a7) {
                function f8() {
                }
                const v9 = f8();
                v9 >> v9;
                const v11 = `string${f6}undefined`;
                f6 instanceof F1;
                return v11.normalize();
            }
            f6.call(this);
            %OptimizeMaglevOnNextCall(f6);
            return f6;
        }
        Object.defineProperty(this, "toString", { get: f5 });
    }
    const v15 = new F1();
    v15.toString(F1, F1, F1);
}
