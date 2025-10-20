function f2() {
    return f2;
}
function f3() {
    function f4() {
        const v5 = new Uint8Array();
        v5.reverse();
        return { done: true };
    }
    return { next: f4 };
}
const v10 = Symbol.iterator;
f2.bind(null, ...{ [v10]: f3 });
