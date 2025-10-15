function f1() {
    return Symbol;
}
function f2() {
    function f3() {
        Error(f2).stack;
        return { done: true };
    }
    const v9 = { next: f3 };
    const t9 = v9.next;
    t9();
    return v9;
}
const v12 = Symbol.iterator;
const v15 = {
    set g(a14) {
    },
    [v12]: f2,
};
v15.c = v15;
f1.bind(null, ...v15);
