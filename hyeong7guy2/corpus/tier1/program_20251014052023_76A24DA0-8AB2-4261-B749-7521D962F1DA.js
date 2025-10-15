function f1() {
    return f1;
}
function f2() {
    const v4 = Date.prototype;
    const v6 = v4.setUTCHours.constructor;
    try { v6(v4); } catch (e) {}
    function f8() {
        return { done: true };
    }
    return { next: f8 };
}
const v12 = Symbol.iterator;
f1.bind(null, ...{ [v12]: f2 });
