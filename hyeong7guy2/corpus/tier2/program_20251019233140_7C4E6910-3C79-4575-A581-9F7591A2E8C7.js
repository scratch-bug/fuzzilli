function f0(a1, a2, a3) {
    const v24 = {
        construct(a5, a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                        return f12;
                    }
                    const v14 = {};
                    v14.getPrototypeOf = f12;
                    function f15(a16, a17) {
                        a16 instanceof f11;
                        return this;
                    }
                    v14.set = f15;
                    const v20 = new Proxy(this, v14);
                    v20.length = v20;
                    try { v20.toString(); } catch (e) {}
                    return f12;
                }
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v22 = new F7();
            v22.toString();
            return v22;
        },
    };
    v24.construct();
}
f0.call(f0, f0);
