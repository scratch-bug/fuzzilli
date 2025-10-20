function f0(a1) {
    function f3() {
        return f3;
    }
    function f4() {
        return f4;
    }
    const v6 = class {
    }
    const v7 = v6.constructor;
    let v8;
    try { v8 = v7(v6); } catch (e) {}
    let v9;
    try { v9 = f3.constructor(f4, -10); } catch (e) {}
    v7(v8, v9, 0.605162901096027);
    return -10;
}
new Worker(f0, { type: "function" });
function f15(a16) {
}
new Worker(f15, { type: "function" });
