class C1 extends Int32Array {
}
const v2 = new C1();
const v3 = v2.includes();
const v5 = [0.08713699408720299,1000000.0,4.0,-1000000000.0,0.8109445590563051,NaN,-1000000000.0,2.220446049250313e-16,2.0];
function f6() {
    function f7() {
        return v3;
    }
    return f7;
}
function f8(a9) {
    return a9;
}
Object.defineProperty(v5, "toString", { configurable: true, get: f6, set: f8 });
v5 != 1024n;
