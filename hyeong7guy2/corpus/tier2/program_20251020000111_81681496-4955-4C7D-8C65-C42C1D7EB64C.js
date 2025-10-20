let v1 = undefined;
v1 = Symbol;
class C2 {
}
const v3 = new C2();
for (let v4 = 0; v4 < 10; v4++) {
    const v5 = [v4,v4,v4,v4,v4];
    const v6 = {};
    function f7() {
        const v8 = f7 !== v3;
        const v9 = Symbol.dispose;
        const v11 = {
            value: v8,
            [v9]() {
                return v8;
            },
        };
        using v12 = v11;
        const v14 = ("NFKD").codePointAt(v5);
        function f15(a16, a17, a18) {
            function F19(a21, a22) {
                if (!new.target) { throw 'must be called with new'; }
                function f23() {
                    function f24(a25) {
                        return a25;
                    }
                    f24.apply(f24, f24, f24, a21);
                    return f24;
                }
                Object.defineProperty(this, "toString", { get: f23 });
            }
            const v27 = new F19();
            class C28 {
                static [v27](a30, a31, a32) {
                }
            }
            C2[Symbol.asyncDispose] = v1;
            return a17;
        }
        try { f15(v3, v6); } catch (e) {}
        v14 + v14;
        return v11;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
