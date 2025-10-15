const v0 = [29578,0,1073741823,1073741824,1073741825,-1024,-4294967295,65536,9996,1073741823];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            for (let v8 = 0; v8 < 5; v8++) {
            }
            let [,v9,v10,v11] = v0;
            -v9;
        }
        f6(a3);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F1();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
