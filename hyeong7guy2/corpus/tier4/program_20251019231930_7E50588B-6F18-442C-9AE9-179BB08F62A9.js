function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v14 = {};
            for (let v15 = 0; v15 < 5; v15++) {
                let v16 = {};
                let v17 = 2;
                const v19 = v15 % v17 ? v16 : v14;
                function f20(a21) {
                    let v22 = "+23:00";
                    ({"e":v17,"g":v22,...v16} = v19);
                    return a21;
                }
                v15++;
            }
        }
        new F8(F8, a7, this, a5);
        return F8;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0(F0, F0);
new F0();
