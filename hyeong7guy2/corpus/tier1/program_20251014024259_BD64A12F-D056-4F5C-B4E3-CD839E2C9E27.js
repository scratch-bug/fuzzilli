function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
function f6() {
    return v5;
}
function f7() {
    function f8() {
        Array(1048576);
        return { done: true };
    }
    f8();
    f8.g = f8;
    return { next: f8 };
}
const v16 = f7();
v16 ?? v16;
const v18 = Symbol.iterator;
f6.bind(null, ...{ [v18]: f7 });
