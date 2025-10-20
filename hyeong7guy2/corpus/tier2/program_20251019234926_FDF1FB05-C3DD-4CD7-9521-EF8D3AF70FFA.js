function f1() {
    return f1;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v19 = {
        getOwnPropertyDescriptor(a8, a9) {
            for (let i12 = 0, i13 = 10; i13; i13--) {
            }
        },
    };
    const v21 = new Proxy(Object, v19);
    try { v21.values(v21); } catch (e) {}
    return { next: f3 };
}
const v24 = Symbol.iterator;
f1.bind(null, ...{ [v24]: f2 });
