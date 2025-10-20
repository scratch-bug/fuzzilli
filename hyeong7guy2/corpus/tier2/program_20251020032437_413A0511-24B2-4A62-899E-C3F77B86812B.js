let v0 = /(\P{Any}[[\11]*]+)/dym;
const v3 = Symbol.iterator;
const v27 = {
    [v3]() {
        const v26 = {
            next() {
                const v7 = { done: 10 };
                function F8(a10, a11) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f12() {
                        function f13(a14) {
                            37065 % v0;
                            return ++v0;
                        }
                        f13();
                        f13();
                        %OptimizeMaglevOnNextCall(f13);
                        return f13;
                    }
                    Object.defineProperty(this, "toString", { get: f12 });
                }
                const v20 = new F8();
                class C21 {
                    static [v20](a23, a24, a25) {
                    }
                }
                return v7;
            },
        };
        return v26;
    },
};
Array.fromAsync(v27);
