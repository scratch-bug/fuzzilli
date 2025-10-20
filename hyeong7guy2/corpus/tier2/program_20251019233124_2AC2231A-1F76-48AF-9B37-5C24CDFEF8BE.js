function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v7 = {};
    Object.defineProperty(v7, "ownKeys", { writable: true, enumerable: true, value: f3 });
    const v9 = new Proxy(Object, v7);
    try { v9.getOwnPropertyDescriptors(v9); } catch (e) {}
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
