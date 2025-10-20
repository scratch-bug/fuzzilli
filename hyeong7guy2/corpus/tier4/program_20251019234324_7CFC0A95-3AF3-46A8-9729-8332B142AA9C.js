function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    globalThis.console.timeEnd(a2);
}
new F0(F0, F0);
