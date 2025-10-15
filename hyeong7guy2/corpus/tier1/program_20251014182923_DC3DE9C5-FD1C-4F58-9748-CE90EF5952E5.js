function f1() {
    return f1;
}
const v2 = class extends f1 {
    static {
        function f4(a5, a6, a7) {
            try {
                Symbol.valueOf(v2);
            } catch(e9) {
                for (let i11 = 0;
                    (() => {
                        function F12(a14, a15) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        for (let v16 = 0; v16 < 5; v16++) {
                            F12.d >>>= 100000;
                        }
                        return i11;
                    })();
                    ) {
                }
            }
            return this;
        }
        const v20 = f4();
        f4(v20, v20, v20);
        %OptimizeMaglevOnNextCall(f4);
        f4();
    }
}
