function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = 2;
const v4 = new BigUint64Array();
for (let v5 = 0; v5 < 500; v5++) {
    [,v2,F0] = v4;
    gc({ execution: "async", type: "minor" });
}
