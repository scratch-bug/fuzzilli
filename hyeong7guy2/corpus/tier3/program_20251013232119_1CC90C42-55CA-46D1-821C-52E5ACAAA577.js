function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F4();
for (let v14 = 0; v14 < 500; v14++) {
    new Int32Array(F0);
    v8 >= F0;
}
