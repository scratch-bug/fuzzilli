function F1() {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            const v8 = { [f7]: "toString" };
            parseInt("und🤯efined");
            const t7 = JSON.stringify;
            t7(v8);
            function f15(a16) {
                return a16;
            }
            return f15;
        }
        Object.defineProperty(this, "toString", { get: f7 });
    }
    const v17 = new F3(this, this);
    class C18 {
        static [v17](a20, a21, a22) {
        }
        static [v17](a24, a25, a26) {
        }
    }
}
new F1();
