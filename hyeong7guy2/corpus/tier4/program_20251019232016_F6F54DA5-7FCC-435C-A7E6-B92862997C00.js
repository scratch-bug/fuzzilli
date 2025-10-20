function f0() {
}
function f1(a2, a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        let v11 = 2147483648;
        let v12 = 3.857894021150475;
        Math.pow(v12, ++v11);
        --v12;
    }
    for (let i17 = 0; i17 < 100000;) {
    }
    F5() instanceof f0;
    return a2;
}
new Worker(f1, { type: "function" });
