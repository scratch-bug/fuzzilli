function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return f2;
}
const v3 = [F0,f2];
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        const v13 = { era: v3 };
        const v15 = JSON.stringify(v13);
        const v17 = [v15];
        Reflect.apply(JSON.parse, v13, v17);
        const v20 = this.constructor;
        try { new v20(JSON, v15, Reflect, v3, this); } catch (e) {}
    }
    new F9();
}
new F4(f2, F4, f2);
