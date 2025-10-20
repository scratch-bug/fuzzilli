const v0 = [-1.0874169871744522e+306,1.0105197356355783e+308,-1000000000000.0,-6.826340982299026,-7.3788214658475715,703.0368724157163];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        let v9;
        try { v9 = a6.call(); } catch (e) {}
        for (const v10 of v0) {
        }
        class C11 {
        }
        const v12 = C11?.constructor;
        v12.bind(v12);
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = C11;
        }
        return v9;
    }
    f5(f5);
    %OptimizeFunctionOnNextCall(f5);
}
const v21 = new F1(v0, F1);
const v22 = new F1(v0, v21);
const v23 = v22.constructor;
const v24 = new v23(v23, F1, v22, v22);
new F1(v0, v24);
