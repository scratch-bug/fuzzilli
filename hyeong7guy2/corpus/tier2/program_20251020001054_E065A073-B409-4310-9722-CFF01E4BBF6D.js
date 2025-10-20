try {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        function f4() {
            function f5(a6) {
                const v8 = new Uint32Array();
                -v8.length;
            }
            f5(f5);
            %OptimizeMaglevOnNextCall(f5);
            return F0;
        }
        f4.call(F0, this, a2);
        f4();
        Object.defineProperty(this, "toString", { get: f4 });
    }
    const v14 = new F0(F0, F0);
    v14.toString;
} catch(e16) {
}
