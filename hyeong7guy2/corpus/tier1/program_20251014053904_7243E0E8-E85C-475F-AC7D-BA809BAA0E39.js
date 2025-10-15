function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 {
}
function f3() {
    return F0;
}
C2.toString = f3;
function f5() {
    return Symbol;
}
function f6() {
    const v8 = new Date(Date);
    try { v8.setUTCHours(C2); } catch (e) {}
    function f10() {
        return { done: true };
    }
    return { next: f10 };
}
const v14 = Symbol.iterator;
f5.bind(null, ...{ [v14]: f6 });
