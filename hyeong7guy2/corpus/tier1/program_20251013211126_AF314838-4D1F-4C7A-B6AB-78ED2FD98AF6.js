class C1 {
}
const v3 = [9,C1];
const v4 = v3.fill(-26614n);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    a8.e = Map;
}
function f10() {
    return v4;
}
function f11(a12) {
    let v14;
    try {
    const t0 = "stop-before-partial";
    v14 = t0(a12, "stop-before-partial", -26614n, v4, v3);
    } catch (e) {}
    return v14;
}
Object.defineProperty(F6, "e", { get: f10, set: f11 });
new F6(F6);
