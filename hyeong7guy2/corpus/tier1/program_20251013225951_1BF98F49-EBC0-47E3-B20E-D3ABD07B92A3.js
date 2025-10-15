function f1() {
    return Symbol;
}
function f2() {
    const v5 = Date.prototype.setUTCHours;
    try { v5.call(); } catch (e) {}
    function f7() {
        return { done: true };
    }
    return { next: f7 };
}
const v11 = Symbol.iterator;
f1.bind(null, ...{ [v11]: f2 });
