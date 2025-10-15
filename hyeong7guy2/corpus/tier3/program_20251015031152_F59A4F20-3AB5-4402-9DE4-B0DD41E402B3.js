function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v8 = [-1,1,9,-1918892703,59940824,-268435456,433,-51435,3];
        let v9;
        try { v9 = v8.filter(this); } catch (e) {}
        return v9;
    }
    f4(a3, a2, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0();
const v12 = new F0(F0, v11);
const t13 = v12.constructor;
new t13();
