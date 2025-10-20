function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = Array(65536);
    function f10(a11, a12, a13) {
    }
    const v16 = ["object",v8];
    new Worker(f10, { arguments: v16, type: "function" });
    gc();
}
new F0();
