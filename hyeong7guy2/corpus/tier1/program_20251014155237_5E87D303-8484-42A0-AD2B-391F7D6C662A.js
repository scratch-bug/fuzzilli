function f1() {
    return f1;
}
function f2() {
    const v4 = new Float32Array(Symbol, Symbol, Float32Array);
    for (let i6 = 0; i6 < 25000; i6++) {
        for (const v12 of v4) {
        }
    }
    function f13() {
        return { done: true };
    }
    return { next: f13 };
}
const v17 = Symbol.iterator;
f1.bind(null, ...{ [v17]: f2 });
