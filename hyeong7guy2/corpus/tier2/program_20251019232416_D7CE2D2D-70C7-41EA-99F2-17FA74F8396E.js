class C1 {
    [1917766850] = C1;
}
class C2 extends C1 {
}
const v3 = new C2();
const v7 = Symbol.iterator;
const v14 = {
    [v7]() {
        Object.defineProperties(C2, v3);
        const v13 = {
            next() {
                return { done: 1917766850 };
            },
        };
        return v13;
    },
};
const v17 = new Int16Array();
function f18() {
    new Date(WeakSet, Date, 882, ...v17, ...v14);
    return Symbol;
}
f18.call();
