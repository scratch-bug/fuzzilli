function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    return F0;
}
function f5() {
    Object.isFrozen(F0);
    function f8() {
        return { done: true };
    }
    return { next: f8 };
}
const v13 = Symbol.iterator;
f4.bind(null, ...{ [v13]: f5 });
