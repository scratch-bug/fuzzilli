function f1() {
    return Int8Array;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    globalThis.console.timeEnd(a4);
}
F2.toString = f1;
new F2(F2);
