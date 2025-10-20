function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
            static get name() {
            }
        }
        C7.bind(a6);
        %OptimizeFunctionOnNextCall(F3);
    }
    new F3();
}
const v11 = new F0(F0);
const v12 = new F0(v11);
const t15 = v12.constructor;
new t15();
