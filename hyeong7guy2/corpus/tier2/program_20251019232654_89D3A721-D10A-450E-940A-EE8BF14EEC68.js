function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function F11(a13, a14) {
                    if (!new.target) { throw 'must be called with new'; }
                    const v16 = class extends Date {
                    }
                    const v17 = new v16();
                    v17.toTemporalInstant();
                }
                new F11(a2, f4);
            }
            new F7(F0, a6);
            Temporal.PlainDateTime;
            return a2;
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
