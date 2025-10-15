const v1 = new BigUint64Array();
function f2(a3) {
    return v1;
}
v1[Symbol.hasInstance] = f2;
for (let i8 = 0;
    (() => {
        Symbol[0] = i8;
        v1[Symbol.hasInstance] = Uint8Array;
        const v11 = i8 < 20000;
        try {
            Symbol();
        } catch(e13) {
        }
        return v11;
    })();
    i8++) {
}
