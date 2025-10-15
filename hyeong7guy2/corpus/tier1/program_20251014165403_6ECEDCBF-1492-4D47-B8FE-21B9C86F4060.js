function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [a6];
            const v8 = v7[4];
            class C9 {
            }
            v8 | 7;
            let v12 = -1098098658;
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                a19++;
                this.e = a19;
            }
            const v21 = new F16("2147483647", -3612);
            const v22 = new F16();
            v22.d = v22;
            let v23 = 30349n;
            ({"b":v23,"e":v12,...Int32Array} = v21);
            v7.with();
        }
        f5();
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v27 = new F0(F0, F0);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
