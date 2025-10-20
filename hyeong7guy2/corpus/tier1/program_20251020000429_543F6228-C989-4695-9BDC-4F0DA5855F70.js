const v0 = [268435439,-9223372036854775807,-1953415435,10000,-268435456,-65537,-128,-1525227024];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            let v8 = -1098098658;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                a15++;
                this.e = a15;
            }
            this[4] | 7;
            const v20 = new F12("2147483647", -3612);
            v20.b = v0;
            new F12();
            let v22 = arguments;
            ({"b":v22,"e":v8,...Int32Array} = v20);
        }
        f6(F1);
        f6(f5);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v25 = new F1();
class C26 {
    static [v25](a28, a29, a30) {
    }
}
