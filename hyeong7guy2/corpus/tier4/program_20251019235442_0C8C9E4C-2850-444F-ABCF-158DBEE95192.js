function f0(a1) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        function f6() {
            function f8() {
                return Symbol;
            }
            const v9 = class extends f8 {
                static {
                    delete Symbol[1073741823];
                }
            }
            return a1;
        }
        f6.constructor();
    }
    const v14 = new F2();
    const v16 = new ArrayBuffer(a1);
    return v16.transferToFixedLength(v16, v14, a1, f0, f0);
}
new Worker(f0, { type: "function" });
function f22(a23) {
    return a23;
}
new Worker(f22, { type: "function" });
