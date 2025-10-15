function f1() {
    return f1;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v6 = { next: f3 };
    const v11 = new ArrayBuffer(1792, { maxByteLength: 1792 });
    const v13 = new Float64Array(v11);
    const v14 = typeof v6;
    v14.replace(v14, v13);
    return v6;
}
const v16 = Symbol.iterator;
f1.bind(null, ...{ [v16]: f2 });
