function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        let v9;
        try { v9 = Reflect.get(f4, f4); } catch (e) {}
        return v9;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v11 = new F0();
const v12 = new F0(v11, v11);
const v13 = v12.constructor;
new v13(v13, v13, F0, v13);
