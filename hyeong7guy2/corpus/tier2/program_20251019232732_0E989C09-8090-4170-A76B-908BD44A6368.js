function f3() {
    return Symbol;
}
function f4() {
    function f5() {
        const v8 = new Uint16Array(94);
        v8.lastIndexOf(1244);
        return { done: WeakMap };
    }
    return { next: f5 };
}
const v12 = Symbol.iterator;
f3.bind(null, ...{ [v12]: f4 });
