function f0() {
    return f0;
}
class C1 extends f0 {
}
class C2 {
}
for (let v3 = 0; v3 < 10; v3++) {
    function f4() {
        const v6 = ("NFKD").codePointAt();
        function f7(a8, a9, a10) {
            a9.constructor;
            return a10;
        }
        f7(C1, v6);
        f7(C2, C2);
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
