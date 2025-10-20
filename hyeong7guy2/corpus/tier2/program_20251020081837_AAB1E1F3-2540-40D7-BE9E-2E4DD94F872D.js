for (let i2 = 0, i3 = 10; i3; i3--) {
    function F9(a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
                function f18(a19) {
                    return f18;
                }
                const v20 = {};
                v20.getPrototypeOf = f18;
                function f21(a22, a23) {
                    return a22 instanceof f17;
                }
                v20.set = f21;
                const v26 = new Proxy(this, v20);
                v26.length = v26;
                try { v26.toString(); } catch (e) {}
                return f18;
            }
            Object.defineProperty(this, "toString", { get: f17 });
        }
        const v28 = new F13();
        v28.toString(F9, F9);
    }
    new F9(F9, F9);
}
for (let i33 = -7, i34 = 10; i34; i34--) {
}
