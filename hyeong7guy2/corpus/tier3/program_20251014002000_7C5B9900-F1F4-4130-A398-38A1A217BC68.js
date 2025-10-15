const v1 = Float64Array[1];
try { v1(); } catch (e) {}
function f3() {
    [f3,eval];
    return v1;
}
