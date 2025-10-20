function f1() {
    return f1;
}
function f2() {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f7(a8, a9) {
        const v12 = String.prototype.concat;
        const v13 = [F3];
        let v14;
        try { v14 = v12.apply(a8, v13); } catch (e) {}
        return v14;
    }
    F3[Symbol.toPrimitive] = f7;
    class C16 {
        static [F3](a18, a19, a20) {
        }
    }
    function f21() {
        return { done: true };
    }
    return { next: f21 };
}
const v25 = Symbol.iterator;
f1.bind(null, ...{ [v25]: f2 });
