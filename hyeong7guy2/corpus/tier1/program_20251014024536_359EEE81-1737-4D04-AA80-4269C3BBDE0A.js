function f1() {
}
class C3 {
    [Float32Array] = 11;
}
class C5 {
}
function f7(a8, a9) {
    const v11 = new Uint16Array();
    v11[1073741823];
    return a8;
}
const v14 = new Proxy(C5, { construct: f7 });
for (let i24 = (() => {
        for (let v16 = 0; v16 < 500; v16++) {
            const v17 = {};
            4294967297 | v17;
            +v17;
        }
        return 0;
    })();
    i24 < 25000;
    ++i24) {
    new v14();
}
`-63824`;
