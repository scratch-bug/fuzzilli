const v2 = Symbol.dispose;
function f5(a6, a7, a8) {
    const v14 = {
        construct(a10, a11) {
            a10 - a10;
            a11.BYTES_PER_ELEMENT;
            return a8;
        },
    };
    try { v14.construct(v2, 125); } catch (e) {}
    v14.construct(11, Int8Array);
    v14.construct(v14, v14);
    return v2;
}
const v19 = f5(f5.call(), 11, Int8Array);
%OptimizeMaglevOnNextCall(f5);
f5(v19, 125, Symbol);
