class C0 {
}
const v1 = new C0();
function f3() {
    return f3;
}
function f4() {
    function f5() {
        Error().stack;
        return { done: true };
    }
    f5.call(v1);
    return { next: f5 };
}
const v13 = Symbol.iterator;
f3.bind(null, ...{ [v13]: f4 });
