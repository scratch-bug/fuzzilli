const v4 = new SharedArrayBuffer(2311, { maxByteLength: 1073741825 });
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            const v20 = new Uint32Array(v4);
            v20.byteLength;
        }
        const v22 = new F13();
        return v22;
    }
    f9(F5, 2311, a8);
    %OptimizeFunctionOnNextCall(f9);
}
const v24 = new F5();
const v25 = v24.constructor;
new v25(1073741825, 2311, v25);
const t18 = v24.constructor;
new t18();
