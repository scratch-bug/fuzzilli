const v0 = [29578,0,1073741823,1073741824,1073741825,-1024,-4294967295,65536,9996,1073741823];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            for (let v10 = 0; v10 < 5; v10++) {
                "p" + v10;
            }
            eval("2147483647");
            let v16 = 30349n;
            ({"b":v16,"e":v8,...Int32Array} = "2147483647");
            let [,v17,v18,v19] = v0;
        }
        f6(f6(F1));
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v22 = new F1(F1, F1);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
