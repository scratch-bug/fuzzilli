function f1() {
    function f2(a3) {
        for (let v4 = 0; v4 < 5; v4++) {
            typeof f2;
            eval(a3);
        }
        return a3;
    }
    f2(Float32Array);
}
Float32Array.toString = f1;
const v10 = new Float64Array();
v10.slice(Float32Array);
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
