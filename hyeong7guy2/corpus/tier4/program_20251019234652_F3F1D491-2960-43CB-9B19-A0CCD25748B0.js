function f0(a1) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        globalThis.console.profile();
    }
    new F2(a1, a1);
    return F2;
}
f0(f0);
const v14 = new Worker(f0, { type: "function" });
v14.getMessage();
