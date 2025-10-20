function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = {};
            for (let i11 = 0;
                (() => {
                    const v13 = i11 < 10000;
                    return v13 || v13;
                })();
                i11++, ("string")[i11]) {
            }
            const v20 = ArrayBuffer.resize;
            const v21 = [f6];
            try { v20.apply(a7, v21); } catch (e) {}
            const v23 = Uint32Array[2];
            function f24(a25, a26, a27) {
                eval(v23);
                return "string";
            }
            return f6;
        }
        f6();
        f6(this);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v32 = new F1(Uint32Array, Uint32Array);
const t30 = v32.toString;
t30();
