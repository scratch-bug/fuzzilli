function f1() {
    return Symbol;
}
function f2() {
    const v4 = BigInt.prototype;
    try { v4.toString(Symbol); } catch (e) {}
    function f6() {
        return { done: true };
    }
    return { next: f6 };
}
const v10 = Symbol.iterator;
f1.bind(null, ...{ [v10]: f2 });
