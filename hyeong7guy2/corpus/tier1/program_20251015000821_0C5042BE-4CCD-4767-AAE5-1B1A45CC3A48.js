const v3 = Array(4);
v3[0] = 128;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        const v14 = {};
        function f16() {
            return v3;
        }
        const v17 = new Proxy(f16, v14);
        const v18 = v17();
        function f19(a20) {
            return f19;
        }
        Object.defineProperty(v18, 5, { configurable: true, set: f19 });
    }
    new F8(4, 128, a6, this);
}
new F4(128, v3);
