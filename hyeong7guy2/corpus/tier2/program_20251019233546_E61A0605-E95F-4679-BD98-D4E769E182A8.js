const v2 = Symbol.iterator;
const v28 = {
    [v2]() {
        let v4 = 10;
        const v27 = {
            next() {
                v4--;
                const v8 = v4 == 0;
                const v9 = { done: v8 };
                function F10(a12, a13) {
                    if (!new.target) { throw 'must be called with new'; }
                    function F14(a16, a17, a18, a19) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f20() {
                            return v4;
                        }
                        function f21(a22) {
                            class C23 {
                                [F14] = a19;
                            }
                            new C23();
                            return a22;
                        }
                        Object.defineProperty(this, "e", { get: f20, set: f21 });
                        this.e = a13;
                    }
                    F14.toString = Symbol;
                    new F14(this, v9, Symbol, Array);
                }
                new F10();
                return v9;
            },
        };
        return v27;
    },
};
Array.fromAsync(v28);
