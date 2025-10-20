for (let [i20, i21] = (() => {
        function f1(a2) {
            return a2;
        }
        const v3 = class extends f1 {
            #valueOf(a5, a6) {
            }
        }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11() {
                function f12(a13) {
                    new Float64Array(this);
                    Float64Array = v3;
                    return f12;
                }
                f12(10);
                f12.call();
                return f12;
            }
            Object.defineProperty(this, "toString", { get: f11 });
        }
        const v18 = new F7(v3, f1);
        v18.toString();
        return [10, 10];
    })();
    i21;
    i21--) {
}
for (let i29 = 0, i30 = 10; i30; i30--) {
}
