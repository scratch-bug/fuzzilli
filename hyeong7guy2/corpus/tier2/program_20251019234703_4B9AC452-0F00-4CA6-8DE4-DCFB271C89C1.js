function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                const v8 = v7 - v7;
                let v9;
                try { v9 = v8.trimEnd(); } catch (e) {}
                try { v9.replaceAll(a2, f5, v9, f5); } catch (e) {}
            }
        }
        f5();
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0();
class C14 {
    static [v13](a16, a17, a18) {
    }
}
