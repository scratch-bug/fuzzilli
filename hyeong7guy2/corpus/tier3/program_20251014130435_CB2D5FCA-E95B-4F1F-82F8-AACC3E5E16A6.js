Symbol.iterator;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        return Uint16Array;
    }
    new Worker(f9, { type: "function" });
}
const v14 = new F5(255, Uint16Array);
const t9 = v14.constructor;
const v16 = new t9();
const t11 = v16.constructor;
new t11();
