function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                const v10 = Temporal.PlainDate;
                try { v10.from("🙌🏿"); } catch (e) {}
                return v10;
            }
            ({ construct: f7 }).construct();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v14 = new F0();
class C15 {
    static [v14](a17, a18, a19) {
    }
}
