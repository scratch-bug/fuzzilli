function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return F0;
}
let v3 = "g";
for (let i5 = (() => {
        ({"e":v3,"f":f2,} = F0);
        return -1e-15;
    })();
    i5 <= 20000;
    i5++) {
    i5 * 2;
}
