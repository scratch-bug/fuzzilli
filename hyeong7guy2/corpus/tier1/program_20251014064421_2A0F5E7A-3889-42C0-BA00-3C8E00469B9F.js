function f0() {
    return f0;
}
function f1() {
    function f2() {
        for (let v4 = 0; v4 < 25; v4++) {
            Array["p" + v4] = v4;
        }
        for (let v8 = 0; v8 < 25; v8++) {
            const v10 = "p" + v8;
            WeakSet[v10] = v10;
        }
        return { done: true };
    }
    return { next: f2 };
}
const v15 = Symbol.iterator;
f0.bind(null, ...{ [v15]: f1 });
