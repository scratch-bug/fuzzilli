function f1() {
    return f1;
}
function f2() {
    function f3() {
        for (let v4 = 0; v4 < 5; v4++) {
            const v8 = new ArrayBuffer(v4, { maxByteLength: 1073741824 });
            const v10 = new Int16Array(v8);
            for (const v11 in v10) {
            }
        }
        return { done: true };
    }
    return { next: f3 };
}
const v15 = Symbol.iterator;
f1.bind(null, ...{ [v15]: f2 });
