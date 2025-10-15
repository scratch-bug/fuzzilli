function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        for (let v7 = 0; v7 < 500; v7++) {
            const v8 = ~-959301409n;
            v8 >> v8;
        }
        return a2;
    }
    Object.defineProperty(this, "f", { set: f4 });
    this.f = a2;
}
new F0(F0, F0);
function f11(a12) {
}
new Worker(f11, { type: "function" });
