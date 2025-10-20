const v1 = {};
v1[Symbol.toStringTag] = "symbol";
for (let [i22, i23] = (() => {
        function f5(a6) {
            return a6;
        }
        const v7 = class extends f5 {
            [v1] = v7;
        }
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                function f13(a14) {
                    new Float64Array(this);
                    Float64Array = v7;
                    return f13;
                }
                f13(f13);
                const t14 = f13.call();
                t14();
                return f13;
            }
            Object.defineProperty(this, "toString", { get: f12 });
        }
        const v20 = new F8();
        v20.toString(F8, 10, v1, v20, Symbol);
        return [10, 10];
    })();
    i23;
    i23--) {
}
for (let i31 = 0, i32 = 10; i32; i32--) {
}
