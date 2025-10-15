const v2 = new Int8Array();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    v2[Symbol.unscopables];
    a6[1] = Int8Array;
    for (let v10 = 0; v10 < 32; v10++) {
        v2["p" + v10] = v10;
    }
}
const v13 = new F3(164, v2);
new F3(v2, F3);
const v15 = new F3(v13, v13);
new F3(v15, F3);
const v21 = { type: "function" };
