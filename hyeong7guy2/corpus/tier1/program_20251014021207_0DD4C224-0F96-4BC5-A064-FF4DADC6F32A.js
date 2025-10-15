function f2(a3) {
    const v5 = new Uint32Array(12234);
    function f6() {
        return Uint32Array;
    }
    const v7 = [-1949062951,-809467572,1,-29760,1367634515,47021,-1523345805];
    let v8;
    try { v8 = v7(12234, f2, v5); } catch (e) {}
    v7.flat().concat(v8);
    new f6(...v7, ...v7, ...v5);
    return 12234;
}
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
}
F12[Symbol.toPrimitive] = f2;
const v19 = {
    o(a17, a18) {
        super[F12] = a18;
    },
};
v19.o();
