function f1(a2) {
    for (let v3 = 0; v3 < 5; v3++) {
        function f4(a5, a6) {
            (a6 ?? f4).toString();
            return f4;
        }
        f4(a2, 4);
        f4();
        %OptimizeFunctionOnNextCall(f4);
    }
    return a2;
}
f1(4);
for (let i14 = 0, i15 = 10; i15; i15--) {
}
function f22() {
    return f22;
}
WebAssembly.instantiateStreaming().catch(f22);
