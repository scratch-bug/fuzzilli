try {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        function f4() {
            function f5(a6) {
                function f7() {
                }
                const v8 = f7();
                v8 >> v8;
                const v10 = `string${f5}undefined`;
                f5 instanceof F0;
                for (let v12 = 0; v12 < 250; v12++) {
                }
                v10.normalize();
                return a2;
            }
            f5.call();
            f5(f5);
            %OptimizeMaglevOnNextCall(f5);
            return f5;
        }
        Object.defineProperty(this, "toString", { get: f4 });
    }
    const v16 = new F0();
    v16.toString();
} catch(e18) {
}
