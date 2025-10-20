function f1() {
    function f2(a3) {
        function f4() {
            eval(a3);
            f2(a3);
            return f1;
        }
        eval(a3);
        return f2;
    }
    return f2;
}
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = new F11(F11, f1);
v15.length = 2147483647n;
v15.length = F11;
for (let i17 = 0; i17 < 20000; i17++) {
}
v15.length = 1;
