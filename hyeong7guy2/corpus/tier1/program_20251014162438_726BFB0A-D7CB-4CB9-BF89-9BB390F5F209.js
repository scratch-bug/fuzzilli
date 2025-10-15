function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
function f3() {
    return F0;
}
function f4(a5) {
    let v6 = -63895n;
    for (let i8 = 0; i8 < 25000; ++i8) {
        Math.acos(!v6);
        v6--;
    }
    return a5;
}
Object.defineProperty(C2, "g", { get: f3, set: f4 });
C2.g = F0;
