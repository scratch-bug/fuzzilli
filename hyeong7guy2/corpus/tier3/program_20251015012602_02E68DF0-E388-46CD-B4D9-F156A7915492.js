const v0 = [];
function f1() {
    v0[v0] = v0;
    return v0;
}
const v2 = [1.0361238576858123e+308,-1.325662891706506e+308];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        const v9 = a8.trimRight;
        let v10;
        try { v10 = new v9(v9, a5, f1, a8, v0); } catch (e) {}
        f1(v10);
        return v9;
    }
    a6[Symbol.toPrimitive] = f7;
}
const v14 = new F3(v2, v0);
function f15(a16, a17) {
    return f1();
}
v14.constructor = f15;
try { v14.constructor(); } catch (e) {}
