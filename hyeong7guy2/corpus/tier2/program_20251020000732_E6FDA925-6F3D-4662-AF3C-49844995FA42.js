function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                for (let i12 = 0; i12 < 20000; i12++) {
                    new Array();
                }
            }
            new F7();
            eval();
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
