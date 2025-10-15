function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return F0;
}
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6) {
    }
    new Worker(f5, { type: "function" });
}
for (let v12 = 0; v12 < 25; v12++) {
    const v13 = class {
    }
    v13.toString = f2;
    const v14 = typeof v13;
    try { v14.anchor(v13); } catch (e) {}
}
new F3();
