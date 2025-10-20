const v0 = /a\W/sygmvi;
class C2 {
}
function f3() {
    return f3;
}
for (let v4 = 0; v4 < 5; v4++) {
    function f5() {
        for (let v6 = 0; v6 < 5; v6++) {
            function F7(a9, a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = v6;
            }
            const v13 = new F7(v6, v0, C2);
            new F7(770, v13, v0);
            f3();
        }
        eval();
        return 770;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
