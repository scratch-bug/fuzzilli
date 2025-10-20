function f1() {
    return f1;
}
function f2() {
    function f4() {
        const v6 = Array(1048576);
        v6.fill(Symbol);
        v6.includes(Symbol);
        return { done: true };
    }
    return { next: f4 };
}
const v13 = Symbol.iterator;
f1.bind(null, ...{ [v13]: f2 });
