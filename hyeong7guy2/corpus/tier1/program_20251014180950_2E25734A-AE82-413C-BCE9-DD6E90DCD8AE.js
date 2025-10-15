function f1() {
    return Symbol;
}
let v2;
try { v2 = f1(); } catch (e) {}
class C3 {
}
const v4 = new C3();
for (let v5 = 0; v5 < 10; v5++) {
    const v6 = [v2,v2];
    const v7 = {};
    function f8() {
        const v9 = f8 !== v4;
        const v10 = Symbol.dispose;
        const v12 = {
            value: v9,
            [v10]() {
                return v10;
            },
        };
        using v13 = v12;
        const v15 = ("NFKD").codePointAt(v6);
        function f16(a17, a18, a19) {
            C3[Symbol.asyncDispose] = v2;
        }
        try { f16(v4, v7); } catch (e) {}
        v15 + v15;
        return v12;
    }
    f8();
    %OptimizeFunctionOnNextCall(f8);
}
