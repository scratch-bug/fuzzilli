function f0(a1, a2, a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            for (let [i16, i17] = (() => {
                    function f11() {
                        try {
                            const v12 = new Uint8Array();
                            function f13() {
                                return f11;
                            }
                            Object.defineProperty(v12, "toString", { get: f13 });
                            v12[31] = v12;
                        } catch(e14) {
                        }
                        return a3;
                    }
                    f11();
                    return [10, 10];
                })();
                i17;
                i17--) {
            }
            return a6;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v23 = new F4(a1, a2);
    class C24 {
        static [v23](a26, a27, a28) {
        }
    }
    return f0;
}
const v32 = new Worker(f0, { type: "function" });
v32.getMessage(v32, "function", "function", v32, Worker);
