function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v3 = [-4294967296,268435456,-10921,-10,-211437548];
const v4 = [];
v4[1] = C2;
v4.unshift(v3);
