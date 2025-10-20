function f2() {
    return Symbol;
}
function f3() {
    function f4() {
        return { done: true };
    }
    const v7 = { next: f4 };
    with (WeakSet) {
        for (let i9 = 0; i9 < 30000; i9++) {
        }
        typeof v7;
    }
    return v7;
}
const v16 = Symbol.iterator;
f2.bind(null, ...{ [v16]: f3 });
