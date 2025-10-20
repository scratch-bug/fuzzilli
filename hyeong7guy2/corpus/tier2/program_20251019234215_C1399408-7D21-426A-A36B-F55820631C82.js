function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                const v9 = ("").constructor;
                const v10 = v9.fromCharCode(v9);
                v10.localeCompare("");
                return v10;
            }
            const v12 = { construct: f7 };
            v12.construct(v12, v12, F0);
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
