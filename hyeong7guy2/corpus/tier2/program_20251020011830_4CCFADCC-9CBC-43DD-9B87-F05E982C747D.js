function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6, a7, a8) {
            const v10 = new SharedArrayBuffer(a6);
            const v12 = new DataView(v10);
            try { v12.getInt32(F0); } catch (e) {}
            const v14 = {};
            const v15 = [255,-426939026,-1778928433,50177,14];
            function F16(a18, a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                a19.search(v15);
                v14["valueOf"]();
            }
            try { v12.getInt32(a3); } catch (e) {}
            return f5;
        }
        const v26 = f5();
        f5(v26, f5, v26);
        %OptimizeMaglevOnNextCall(f5);
        f5();
        function f29(a30) {
            return a30;
        }
        return f29;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v31 = new F0(F0, F0);
class C32 {
    static [v31](a34, a35, a36) {
    }
}
