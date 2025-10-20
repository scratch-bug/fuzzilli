function f0() {
    return f0;
}
with (Map) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6(a7, a8, a9) {
            const v11 = [-28740];
            class C12 {
            }
            C12.h = f6;
            C12.h = a5;
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                a19[Symbol.toPrimitive] = f0;
            }
            new F14(v11, -1, C12, -9007199254740992n);
            return F2;
        }
        f6(F2, f0, F2);
        %OptimizeFunctionOnNextCall(f6);
    }
    const v24 = new F2(f0, Map);
    new F2(Map, v24);
    new F2();
}
for (let i29 = 0, i30 = 10; i30; i30--) {
}
