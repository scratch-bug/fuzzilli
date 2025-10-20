function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let v4 = 0; v4 < 10; v4++) {
    function f5() {
        function f6(a7, a8, a9) {
            const v16 = {
                valueOf(a11, a12, a13, a14) {
                    var d = a8;
                },
            };
            return v16;
        }
        const v17 = f6();
        const v19 = ("NFKD").replaceAll("NFKD", "NFKD");
        const v20 = v19 + v19;
        const v21 = {};
        const v22 = {};
        const v23 = {};
        v23.g = F0;
        v23.d = v20;
        v23.a = v4;
        const v24 = {};
        v24.d = v20;
        v24.b = v17;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
