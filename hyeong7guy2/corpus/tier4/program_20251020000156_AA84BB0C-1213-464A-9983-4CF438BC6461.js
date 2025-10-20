class C0 {
}
const v1 = C0.__lookupGetter__;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    globalThis.console.timeLog(v1);
}
new F2();
