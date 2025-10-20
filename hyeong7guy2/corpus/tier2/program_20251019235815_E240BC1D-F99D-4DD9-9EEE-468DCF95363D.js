const v0 = [Infinity,114288.54050936108,-7.955969196733195,664.45275807441];
function f1() {
    function f2(a3) {
        try { a3(); } catch (e) {}
        return typeof v0 === "number";
    }
    f2(f2);
    %OptimizeMaglevOnNextCall(f2);
    return f2;
}
Object.defineProperty(v0, "toString", { get: f1 });
class C10 extends Uint32Array {
    static [v0](a12, a13, a14) {
    }
}
