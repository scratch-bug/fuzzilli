function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2(a3) {
    a3[18] = a3;
    return C1;
}
f2(C1);
const v7 = Uint8Array.fromHex("AE7Aa3c5fbcC07a93C8a6efFAbE80728C3eA83CA0ce9EB0D7CFC78Bd9ee14BFaFa0A24Aa");
f2(v7);
!"AE7Aa3c5fbcC07a93C8a6efFAbE80728C3eA83CA0ce9EB0D7CFC78Bd9ee14BFaFa0A24Aa";
%OptimizeFunctionOnNextCall(f2);
f2(v7);
