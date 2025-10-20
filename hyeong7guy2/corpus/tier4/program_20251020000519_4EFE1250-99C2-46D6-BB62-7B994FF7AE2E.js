let v0 = 2363;
v0++;
for (let v2 = 0; v2 < 10; v2++) {
    function f3() {
        v0 + ("NFKD" + "NFKD");
        return v0;
    }
    f3();
    %OptimizeFunctionOnNextCall(f3);
}
