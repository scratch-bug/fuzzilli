const v3 = Symbol.iterator;
const v11 = {
    [v3]() {
        const v6 = [0.412802920877953];
        try { v6.filter(); } catch (e) {}
        v6.length = 10;
        const v10 = {
            next() {
                return { done: 10 };
            },
        };
        return v10;
    },
};
const v14 = new Int16Array();
function f15() {
    new Date(WeakSet, Date, 882, ...v14, ...v11);
    return v14;
}
f15();
f15.call();
%OptimizeFunctionOnNextCall(f15);
for (let i21 = 0, i22 = 10; i22; i22--) {
}
f15();
