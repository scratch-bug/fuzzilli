const v4 = Symbol.iterator;
const v13 = {
    [v4]() {
        let v6 = 10;
        let v7 = v6 + true;
        v7++;
        const v12 = {
            next() {
                v6++;
                return { done: 1676310533 };
            },
        };
        return v12;
    },
};
const v16 = new Int16Array();
function f17() {
    const v18 = new Date(Symbol, Date, 882, ...v16, ...v13);
    return v18;
}
f17();
%PrepareFunctionForOptimization(f17);
%OptimizeFunctionOnNextCall(f17);
f17();
