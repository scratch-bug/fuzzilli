function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        const v6 = [31215.68500756973,6.53257897060967];
        v6[15] |= 256;
        return v6;
    }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function f12(a13) {
                function F14(a16, a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F14.constructor = f4;
                const t15 = F14.constructor;
                const v20 = t15();
                v20.unshift();
                v20[15];
                return v20;
            }
            f12(this);
            f12(f11);
            %OptimizeMaglevOnNextCall(f12);
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v25 = new F7();
    v25.toString();
}
new F0(F0, F0);
