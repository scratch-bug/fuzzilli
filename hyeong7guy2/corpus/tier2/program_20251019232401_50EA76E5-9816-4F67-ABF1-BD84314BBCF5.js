function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v9 = new Proxy(Object, { getOwnPropertyDescriptor: Object });
    try { v9.values(v9); } catch (e) {}
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
