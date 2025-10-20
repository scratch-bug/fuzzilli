for (let i3 = 0, i4 = 10; i4; i4--) {
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
}
new F10();
const v15 = /a\W/sygmvi;
class C16 {
}
for (let v17 = 0; v17 < 5; v17++) {
    function f18() {
        for (let v19 = 0; v19 < 5; v19++) {
            function F20(a22, a23, a24, a25) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F20(v19, v15, C16);
        }
        eval();
    }
    f18();
    %OptimizeFunctionOnNextCall(f18);
}
