let v0 = -52399;
const v8 = {
    [Symbol]() {
        const v7 = {
            next() {
                const v6 = {
                    next() {
                        v0--;
                        return v0;
                    },
                };
                return this;
            },
        };
    },
};
function f9() {
    return v0;
}
%PrepareFunctionForOptimization(f9);
%OptimizeFunctionOnNextCall(f9);
f9();
