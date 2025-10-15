function f1() {
    return f1;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v6 = {};
    v6.getPrototypeOf = f3;
    const v8 = new Proxy(f3, v6);
    for (const v9 in v8) {
    }
    return { next: f3 };
}
const v11 = Symbol.iterator;
f1.bind(null, ...{ [v11]: f2 });
