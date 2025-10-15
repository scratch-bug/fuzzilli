function f1() {
    return f1;
}
let v2;
try { v2 = f1(); } catch (e) {}
class C3 {
}
const v4 = new C3();
for (let v5 = 0; v5 < 10; v5++) {
    const v6 = [f1,f1,f1,f1];
    const v7 = {};
    function f8() {
        const v10 = ("NFKD").codePointAt(v6);
        function f11(a12, a13, a14) {
            C3[Symbol.asyncDispose] = v2;
            return v6;
        }
        try { f11(v4, v7); } catch (e) {}
        v10 + v10;
    }
    f8();
    %OptimizeFunctionOnNextCall(f8);
}
