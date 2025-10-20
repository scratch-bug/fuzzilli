function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v6;
    try { v6 = new a4(); } catch (e) {}
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            a14.BYTES_PER_ELEMENT = F0;
            a17--;
            this.f = a17;
        }
        const v19 = new F12(f7, 1825, F12, 1825);
        const t15 = v19.constructor;
        const v21 = new t15(v19);
        v21.f;
        const v23 = v21.constructor;
        new v23(v23);
        const v25 = new v23(v21);
        return v25;
    }
    f7(a4, this, v6);
    %OptimizeFunctionOnNextCall(f7);
}
const v27 = new F2();
const t27 = v27.constructor;
new t27(F2);
