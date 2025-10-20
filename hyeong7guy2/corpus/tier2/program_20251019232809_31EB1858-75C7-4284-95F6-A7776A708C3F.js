function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const v10 = this[4];
            const v12 = [Infinity,114288.54050936108,-7.955969196733195,664.45275807441];
            let v14;
            try { v14 = undefined(F0, v7, F0, f4); } catch (e) {}
            typeof v12 === v14;
            v10 | 7;
            let v18 = arguments;
            ({"b":v18,"e":v7,...Int32Array} = -3612);
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v21 = new F0();
class C22 {
    static [v21](a24, a25, a26) {
    }
}
