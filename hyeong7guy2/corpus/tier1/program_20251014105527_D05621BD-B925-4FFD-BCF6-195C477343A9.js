const v1 = [-1196253982,-65537,-33735,-128,2147483647,4096,4294967297,-11,2147483647];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            v1.length >>>= 0.603409810623195;
            let v9 = -1098098658;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                a16++;
                this.e = a16;
            }
            const v18 = new F13("2147483647", -3612);
            new F13();
            let v20 = 30349n;
            ({"b":v20,"e":v9,...Int32Array} = v18);
            return a5;
        }
        f7(f7(v1));
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v23 = new F2(0.603409810623195, 0.603409810623195);
class C24 {
    static [v23](a26, a27, a28) {
    }
}
