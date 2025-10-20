function f1() {
    return f1;
}
function f2() {
    const v4 = new Float64Array(Symbol, f2);
    const t5 = v4.keys().drop(v4);
    t5.constructor = Symbol;
    function f7() {
        return { done: true };
    }
    return { next: f7 };
}
const v11 = Symbol.iterator;
f1.bind(null, ...{ [v11]: f2 });
