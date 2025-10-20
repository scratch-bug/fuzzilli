const v1 = [0];
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function f12(a13) {
                v1.includes(a13, -1082547511);
                return 0;
            }
            f12(0);
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v16 = new F7(F2, a4);
    class C17 {
        static [v16](a19, a20, a21) {
        }
    }
}
new F2();
