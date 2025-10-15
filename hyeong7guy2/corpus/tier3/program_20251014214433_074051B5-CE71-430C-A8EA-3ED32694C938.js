const v0 = [-5.0,3.0,-2.0,0.6214030410428262,1e-15,0.6074033746017355,2.0,2.2250738585072014e-308,2.220446049250313e-16];
class C1 {
    constructor(a3, a4) {
        function F6(a8, a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            a8[1];
            new a11(this, this, v0);
        }
        async function f15(a16, a17) {
            const v19 = new F6(arguments, Uint8Array, Uint8Array, BigUint64Array);
            const v20 = v19.constructor;
            try { new v20(v0); } catch (e) {}
            await f15;
            return a4;
        }
        f15();
        f15(v0, Uint8Array);
        %OptimizeFunctionOnNextCall(f15);
    }
}
new C1(C1, C1);
