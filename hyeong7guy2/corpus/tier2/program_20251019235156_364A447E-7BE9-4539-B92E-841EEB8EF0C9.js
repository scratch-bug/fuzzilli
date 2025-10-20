try {
    const v0 = {};
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v12 = new Uint32Array();
                const v13 = { __proto__: this };
                const v16 = v12.length;
                v16 | v16;
                const v18 = { month: v16 };
                for (let i21 = 0, i22 = 10; i22; i22--) {
                }
            }
            f9();
            f9();
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v30 = new F4();
    class C31 {
        static [v30](a33, a34, a35) {
        }
    }
} catch(e36) {
}
