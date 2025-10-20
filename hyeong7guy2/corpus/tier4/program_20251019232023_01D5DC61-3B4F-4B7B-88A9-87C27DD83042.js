function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
let v2 = new F0();
let v3 = -9223372036854775808;
const v4 = [91434555,-3,268435439,-2147483649,9,-13,268435441,-4096,-65535,1000];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    [v3,v2,,...v2] = v4;
    eval();
}
new F5(v3, v4);
