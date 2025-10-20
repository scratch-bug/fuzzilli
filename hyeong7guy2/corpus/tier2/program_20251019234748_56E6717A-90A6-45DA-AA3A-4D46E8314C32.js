function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v12 = {
                p(a9, a10) {
                    for (let v11 = 0; v11 < 5; v11++) {
                        super.b >>>= v11;
                    }
                    return f4;
                },
                __proto__: null,
            };
            let v13;
            try { v13 = v12.p(v12, f4); } catch (e) {}
            return v13;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0(F0, F0);
class C15 {
    static [v14](a17, a18, a19) {
    }
}
