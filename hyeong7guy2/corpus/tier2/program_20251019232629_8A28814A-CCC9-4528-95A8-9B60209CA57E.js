function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [];
            try { v7.forEach(a2); } catch (e) {}
            let v9;
            try { v9 = v7(); } catch (e) {}
            v9--;
        }
        f5();
        f5();
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
