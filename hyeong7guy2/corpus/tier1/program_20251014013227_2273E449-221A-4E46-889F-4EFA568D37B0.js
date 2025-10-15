function f1() {
    return f1;
}
function f2() {
    const v4 = Date.prototype;
    try { v4.setSeconds(f1, f1, v4, Date); } catch (e) {}
    function f6() {
        return { done: true };
    }
    return { next: f6 };
}
const v10 = Symbol.iterator;
f1.bind(null, ...{ [v10]: f2 });
