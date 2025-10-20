function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v6 = { done: true };
        const v7 = ++Uint32Array;
        const v10 = new Float64Array(SharedArrayBuffer);
        v10.lastIndexOf(v7);
        return v6;
    }
    return { next: f3 };
}
const v13 = Symbol.iterator;
f1.bind(null, ...{ [v13]: f2 });
