const v2 = {};
function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 4096n;
}
const v8 = new F3(4096n, Symbol, v2);
const v9 = v8.h;
function f10() {
    return F3;
}
function f11() {
    function f12() {
        return { done: v2 };
    }
    const v14 = { next: f12 };
    try { v9.toString(v14); } catch (e) {}
    return v14;
}
const v16 = Symbol.iterator;
f10.bind(null, ...{ [v16]: f11 });
