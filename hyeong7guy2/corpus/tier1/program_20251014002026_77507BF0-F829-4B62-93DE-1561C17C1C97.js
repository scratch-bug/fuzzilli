function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    a6 ?? a6;
}
function f9() {
}
function f10() {
    function f11() {
        function f13(a14, a15) {
        }
        const v18 = [0,F4];
        new Worker(f13, { arguments: v18, type: "function" });
        return { done: true };
    }
    const v23 = { next: f11 };
    v23.constructor = f11;
    v23.constructor();
    return v23;
}
const v25 = Symbol.iterator;
f9.bind(null, ...{ [v25]: f10 });
