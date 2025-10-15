function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return F0;
}
class C3 extends f2 {
}
function f4(a5) {
    a5[18] = F0;
    return f4;
}
f4(C3);
const v9 = Uint8Array.fromHex("AE7Aa3c5fbcC07a93C8a6efFAbE80728C3eA83CA0ce9EB0D7CFC78Bd9ee14BFaFa0A24Aa");
f4(v9);
%OptimizeFunctionOnNextCall(f4);
f4(v9);
