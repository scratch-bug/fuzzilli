const v1 = new BigUint64Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v6 = 0; v6 < 5; v6++) {
        v1["p" + v6] = v6;
    }
}
new F2();
