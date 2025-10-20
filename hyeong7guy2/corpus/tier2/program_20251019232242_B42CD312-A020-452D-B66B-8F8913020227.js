for (let i2 = 0, i3 = 10; i3; i3--) {
    function f10() {
        const v12 = [31215.68500756973,6.53257897060967];
        v12[15] |= 256;
        return v12;
    }
    function F13(a15, a16) {
        if (!new.target) { throw 'must be called with new'; }
        function f17() {
            function f18(a19) {
                function F20(a22, a23, a24) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                F20.constructor = f10;
                const t14 = F20.constructor;
                const v26 = t14();
                const v27 = v26[15];
                v26[15];
                function f29() {
                    Symbol[this] = v27;
                }
            }
            %OptimizeMaglevOnNextCall(f18);
            return f18;
        }
        Object.defineProperty(this, "toString", { get: f17 });
    }
    const v30 = new F13();
    v30.toString();
}
