function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v20 = {
        getOwnPropertyDescriptor(a8, a9) {
            a8.preventExtensions(a8);
            for (let i13 = 0, i14 = 10; i14; i14--) {
            }
        },
    };
    const v22 = new Proxy(Object, v20);
    try { v22.getOwnPropertyDescriptors(v22); } catch (e) {}
    return { next: f3 };
}
const v25 = Symbol.iterator;
f1.bind(null, ...{ [v25]: f2 });
