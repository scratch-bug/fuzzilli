function f2() {
    return f2;
}
function f3() {
    function f4() {
        const v6 = Array(1048576);
        v6.push(1048576);
        v6.includes(-459590157n);
        return { done: true };
    }
    return { next: f4 };
}
const v13 = Symbol.iterator;
f2.bind(null, ...{ [v13]: f3 });
