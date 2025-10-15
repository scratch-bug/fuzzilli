function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        return { done: true };
    }
    const v7 = { next: f4 };
    with (WeakSet) {
        typeof v7;
    }
    return v7;
}
const v9 = Symbol.iterator;
f2.bind(null, ...{ [v9]: f3 });
