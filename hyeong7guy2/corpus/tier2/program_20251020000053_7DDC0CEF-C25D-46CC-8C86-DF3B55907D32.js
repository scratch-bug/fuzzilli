function f0() {
    return f0;
}
function f3() {
    return f3;
}
function f4() {
    function f5() {
        const v7 = Array(1048576);
        v7.push(1048576, f0);
        v7.includes(-459590157n);
        return { done: true };
    }
    return { next: f5 };
}
const v14 = Symbol.iterator;
f3.bind(null, ...{ [v14]: f4 });
