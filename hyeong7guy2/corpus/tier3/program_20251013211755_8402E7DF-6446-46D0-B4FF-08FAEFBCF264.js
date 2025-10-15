const v1 = class extends BigInt64Array {
}
function f2() {
    class C3 {
        static {
            eval();
        }
    }
    return C3;
}
for (let v7 = 0; v7 < 500; v7++) {
    f2.call();
}
