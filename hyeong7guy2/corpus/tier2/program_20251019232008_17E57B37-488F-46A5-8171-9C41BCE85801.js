const v3 = Symbol.iterator;
const v33 = {
    [v3]() {
        let v5 = 10;
        const v32 = {
            next() {
                const v7 = v5--;
                const v9 = v5 == 0;
                const v10 = { done: v9 };
                function F11(a13, a14) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f15(a16, a17, a18) {
                        function F19(a21, a22, a23, a24) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f25() {
                                return a14;
                            }
                            function f26(a27) {
                                const v28 = [0.39346707945810944,-991803.8963643727];
                                v28[15] = 4294967295;
                                v28[15] |= a22;
                                return a27;
                            }
                            Object.defineProperty(this, "e", { get: f25, set: f26 });
                            this.e = a14;
                        }
                        new F19();
                        return v7;
                    }
                    f15();
                    %OptimizeFunctionOnNextCall(f15);
                }
                new F11();
                return v10;
            },
        };
        return v32;
    },
};
Array.fromAsync(v33);
