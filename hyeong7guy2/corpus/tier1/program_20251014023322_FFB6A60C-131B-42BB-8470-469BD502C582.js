class C0 {
}
const v1 = delete C0.a;
const v3 = Array.prototype;
v3.shift.apply(v1);
function f6() {
    return v3;
}
function f7() {
    function f9() {
        const v11 = Array(1048576);
        v11.push(1048576, f9, Symbol, C0);
        v11.includes(Symbol);
        return { done: true };
    }
    return { next: f9 };
}
const v18 = Symbol.iterator;
f6.bind(null, ...{ [v18]: f7 });
