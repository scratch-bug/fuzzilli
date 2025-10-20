function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        const v62 = Symbol.iterator;
        const v68 = {
            [v62]() {
                const v67 = {
                    next() {
                        return { done: 10 };
                    },
                };
                return v67;
            },
        };
        const v71 = new Int16Array(4, a2, 20);
        new Date(WeakSet, Date, 882, ...v71, ...v68);
        Uint8Array.of(108, 179, 225, 20, 243, 55, 25, 64, 58, 11, 85, 77, 158, 239, 132, 131, 90, 16, 158, 164, 195, 142, 51, 26, 38, 97, 78, 128, 163, 45, 191, 238, 217, 26, 106, 4, 139, 239, 89, 187, -4096, 148, 67, 172, 240, 114, 70, 59, 35, 249, 230, 232, 100, 36, 215, 21);
        function F78(a80, a81) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v82 = new F78(26, f4);
        const v83 = v82 / v82;
        v83 | v83;
        return 26;
    }
    f4();
    %OptimizeMaglevOnNextCall(f4);
    f4();
}
const v87 = new F0(F0, F0);
const t30 = v87.constructor;
new t30();
