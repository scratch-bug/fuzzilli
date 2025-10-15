function f1(a2) {
    const v4 = new Uint32Array(12234);
    function f5() {
        for (let i7 = 0;
            (() => {
                const v9 = i7 < 100000;
                const v10 = {};
                return v9;
            })();
            ++i7) {
        }
        return f1;
    }
    const v14 = [-1949062951,-809467572,1,-29760,1367634515,47021,-1523345805];
    new f5(...v14, ...v14, ...v4);
}
function F16(a18) {
    if (!new.target) { throw 'must be called with new'; }
}
F16[Symbol.toPrimitive] = f1;
const v24 = {
    o(a22, a23) {
        super[F16] = a23;
        return a23;
    },
};
v24.o(v24, v24);
