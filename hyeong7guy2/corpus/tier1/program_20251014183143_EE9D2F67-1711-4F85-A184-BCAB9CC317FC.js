const v29 = {
    construct(a1, a2) {
        function F3(a5, a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                function f13() {
                    function f14(a15) {
                        try { a15(f14); } catch (e) {}
                        return typeof this === "number";
                    }
                    f14();
                    return f14;
                }
                Object.defineProperty(this, "toString", { get: f13 });
            }
            const v21 = new F9();
            class C22 {
                static [v21](a24, a25, a26) {
                }
            }
        }
        new F3(this, a1, this, F3);
        return Reflect;
    },
};
function f31() {
    return f31;
}
const v32 = new Proxy(f31, v29);
for (let v33 = 0; v33 < 25; v33++) {
    Reflect.construct(v32, []);
}
