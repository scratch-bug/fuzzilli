function f3(a4, a5, a6) {
    const v12 = {
        construct(a8, a9) {
            a8 * a8;
            a9.prototype = a9;
            a8.construct;
            return Int8Array;
        },
    };
    const v13 = v12.construct(11, Int8Array);
    v12.construct(v12, v12);
    return v13;
}
f3.call(f3, Int8Array);
const t13 = f3();
new t13(4294967295);
%OptimizeMaglevOnNextCall(f3);
f3();
