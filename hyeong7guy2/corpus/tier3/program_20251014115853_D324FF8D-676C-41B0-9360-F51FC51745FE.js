class C0 {
}
const v1 = new C0();
const v2 = [-65537,268435440,0,-6,2147483647,9007199254740990,7,-634776484,1073741824];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            try { a17.apply(a9, v2); } catch (e) {}
        }
        const v19 = new F12(a9, F3, -9007199254740992n, a5);
        return v19;
    }
    f7();
    %OptimizeFunctionOnNextCall(f7);
}
const v21 = new F3();
const v22 = v21.constructor;
const v23 = new v22(v22);
const t20 = v23.constructor;
new t20(v1);
new v22();
