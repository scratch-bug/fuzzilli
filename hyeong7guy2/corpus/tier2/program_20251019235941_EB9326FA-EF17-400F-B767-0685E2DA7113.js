const v1 = [0];
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10() {
            function f11(a12) {
                v1.includes(a12, -1082547511);
            }
            return f11;
        }
        Object.defineProperty(this, "toString", { get: f10 });
    }
    const v14 = new F6();
    class C15 {
        static [v14](a17, a18, a19) {
        }
    }
}
new F2(F2);
