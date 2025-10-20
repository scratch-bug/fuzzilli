const v1 = [0];
v1.unshift(0);
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function f12(a13) {
                v1.includes(a13, -1082547511);
                return a13;
            }
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v15 = new F7();
    class C16 {
        static [v15](a18, a19, a20) {
        }
    }
}
new F3(v1);
