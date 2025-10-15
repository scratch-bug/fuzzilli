const v1 = class extends WeakSet {
}
const v2 = new v1();
for (let v4 = 0; v4 < 1000; v4++) {
    const v5 = { 10000: 0 };
    function f6(a7) {
        d = v2.delete(f6);
        return a7;
    }
    f6(v5);
}
