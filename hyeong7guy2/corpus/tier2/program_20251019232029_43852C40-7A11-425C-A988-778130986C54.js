function f2() {
    return f2;
}
const v4 = WebAssembly.instantiateStreaming().catch(f2);
const v7 = Symbol.iterator;
const v37 = {
    [v7]() {
        let v9 = 10;
        const v36 = {
            next() {
                v9--;
                const v13 = v9 == 0;
                const v14 = { done: v13 };
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f19(a20, a21, a22) {
                        function F23(a25, a26, a27, a28) {
                            if (!new.target) { throw 'must be called with new'; }
                            function f29() {
                                return a25;
                            }
                            function f30(a31) {
                                const v32 = [0.39346707945810944,-991803.8963643727];
                                v32[15] = 0;
                                v32[15] |= a26;
                                return v32;
                            }
                            Object.defineProperty(this, "e", { get: f29, set: f30 });
                            this.e = a18;
                        }
                        new F23();
                        return this;
                    }
                    f19(v9, Symbol, v4);
                    %OptimizeFunctionOnNextCall(f19);
                }
                new F15();
                return v14;
            },
        };
        return v36;
    },
};
Array.fromAsync(v37);
