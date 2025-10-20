function f1() {
    return f1;
}
function f2() {
    function f3() {
        const v5 = Array(1048576);
        v5.push(1048576);
        v5.includes();
        return { done: true };
    }
    return { next: f3 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
