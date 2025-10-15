function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        class C5 extends Int32Array {
        }
        const v6 = new C5();
        function f7() {
            return f1;
        }
        f7.apply(Symbol, v6);
        return { done: true };
    }
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
