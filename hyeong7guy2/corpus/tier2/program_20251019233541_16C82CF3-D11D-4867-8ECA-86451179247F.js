const v0 = [-Infinity,-8.501683021071418e+307,-1.4631115758623707,116.59452389424746,0.29172675564412287,-31.91050904426504,-5.300175551425212e+306,-Infinity];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function f9(a10) {
                return a4;
            }
            const v11 = class extends f9 {
                static ["NFD"](a13, a14, a15, a16) {
                }
                static [v0](a18, a19) {
                }
                static ["NFD"](a21, a22, a23, a24) {
                }
            }
            return a4;
        }
        f6(f6());
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v27 = new F1();
class C28 {
    static [v27](a30, a31, a32) {
    }
}
