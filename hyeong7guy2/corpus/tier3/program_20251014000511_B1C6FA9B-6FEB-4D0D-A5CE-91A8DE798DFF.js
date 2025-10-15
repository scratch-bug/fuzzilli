function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6(a7, a8) {
            new Uint32Array(2002);
            async function* f12(a13, a14) {
                yield f12;
            }
        }
        new Worker(f6, { type: "function" });
    }
    new F2();
}
const v21 = new F0();
v21.constructor;
