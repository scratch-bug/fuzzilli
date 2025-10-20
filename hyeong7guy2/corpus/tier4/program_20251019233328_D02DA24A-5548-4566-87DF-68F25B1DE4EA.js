const v2 = { maxByteLength: 1073741825 };
const v4 = new SharedArrayBuffer(2311, v2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            const v20 = new Uint32Array(v4);
            v20.length;
        }
        new F13();
        return v2;
    }
    f9(v4, this, v2);
    %OptimizeFunctionOnNextCall(f9);
}
const v24 = new F5(F5, 1073741825);
const t17 = v24.constructor;
new t17();
new F5();
