const v1 = class {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            let v9 = -1098098658;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                const v17 = this.constructor;
                try { new v17(v1, 11037); } catch (e) {}
                a16++;
                this.e = a16;
            }
            const v20 = new F13("2147483647", -3612);
            v20.length;
            new F13();
            let v23 = 30349n;
            ({"b":v23,"e":v9,...Int32Array} = v20);
            eval();
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v28 = new F2();
class C29 {
    static [v28](a31, a32, a33) {
    }
}
