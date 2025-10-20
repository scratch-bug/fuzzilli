const v4 = new SharedArrayBuffer(2311, { maxByteLength: 1073741825 });
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            const v20 = new Uint32Array(v4);
            v20.length;
        }
        try { new F13(a8, 1073741825, this, a11); } catch (e) {}
        return a12;
    }
    f9();
    %OptimizeFunctionOnNextCall(f9);
}
const v24 = new F5(F5, 1073741825);
const v25 = v24.constructor;
new v25(v4, v24, v25);
new F5();
