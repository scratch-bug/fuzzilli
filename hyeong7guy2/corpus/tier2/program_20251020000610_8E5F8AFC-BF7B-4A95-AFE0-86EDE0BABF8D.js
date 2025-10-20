const v2 = {};
const v5 = Symbol.iterator;
const v16 = {
    [v5]() {
        let v7 = 10;
        const v14 = {
            next() {
                const v9 = this?.toLocaleString;
                try { new v9(); } catch (e) {}
                let v11 = v7++;
                v11--;
                return { done: 1676310533 };
            },
        };
        v14.hasOwnProperty(v14);
        return v14;
    },
};
const v19 = new Int16Array();
function f20() {
    const v21 = new Date(Symbol, Date, 882, ...v19, ...v16);
    return v21;
}
f20().setUTCFullYear(v2, 15, 15);
%PrepareFunctionForOptimization(f20);
%OptimizeFunctionOnNextCall(f20);
f20();
