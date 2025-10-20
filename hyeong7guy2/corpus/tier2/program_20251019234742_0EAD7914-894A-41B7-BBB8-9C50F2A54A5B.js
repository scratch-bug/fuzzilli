const v0 = class {
}
const v1 = [-857793070,-2,-128,-2147483647,792387527,9007199254740991,1073741824,2147483647];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    let v3 = this;
    new a4(v0, v1);
    function F7(a9, a10, a11, a12) {
        if (!new.target) { throw 'must be called with new'; }
        a11.c = a11;
        function f13(a14, a15) {
            [v3] = v1;
            return v1;
        }
        f13();
        %OptimizeMaglevOnNextCall(f13);
    }
    const v17 = new F7(v1, v1, a4);
    const t18 = v17.constructor;
    new t18(a4, a4, a5);
}
new F2(F2, F2);
