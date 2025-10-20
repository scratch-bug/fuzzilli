const v1 = [Int32Array,Int32Array,Int32Array,Int32Array];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            v1.push({});
            let v11 = -1098098658;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            this[4] | 7;
            let v19 = arguments;
            ({"b":v19,"e":v11,...Int32Array} = F12);
        }
        f7(f7(f6));
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v22 = new F2();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
