const v1 = {};
function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        return { done: true };
    }
    const v8 = {};
    v8.isExtensible = v1;
    const v10 = new Proxy(Object, v8);
    try { v10.isFrozen(v10); } catch (e) {}
    return { next: f4 };
}
const v13 = Symbol.iterator;
f2.bind(null, ...{ [v13]: f3 });
