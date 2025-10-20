function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                const v9 = ("").constructor;
                ("").localeCompare(v9.fromCharCode(v9));
                return f7;
            }
            ({ construct: f7 }).construct();
            return a6;
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
