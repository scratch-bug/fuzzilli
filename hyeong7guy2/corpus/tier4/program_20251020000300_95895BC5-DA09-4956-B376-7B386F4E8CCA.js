const v0 = [-1e-15,0.14048585872129493,887.0711863430349,-310800.75905810925,-Infinity];
function f1(a2) {
    function f3() {
        return v0;
    }
    return f3;
}
v0[Symbol.toPrimitive] = f1;
try {
    const v7 = Intl.NumberFormat;
    const v9 = {};
    v9.notation = v0;
    v7("yue", v9);
} catch(e11) {
}
