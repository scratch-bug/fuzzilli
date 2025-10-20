function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            class C8 extends Uint8Array {
            }
            const v9 = new C8();
            const t7 = Temporal.Instant;
            const v12 = new t7(v9);
            const v13 = v12.round;
            try { v13.apply(Temporal); } catch (e) {}
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0(F0, F0);
class C16 {
    static [v15](a18, a19, a20) {
    }
}
