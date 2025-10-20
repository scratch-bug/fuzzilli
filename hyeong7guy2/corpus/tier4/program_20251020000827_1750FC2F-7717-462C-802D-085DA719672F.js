const v1 = new Float32Array();
async function f3(a4, a5) {
    let v6;
    try { v6 = a5(Float32Array); } catch (e) {}
    for (let i8 = 0, i9 = v6;
        i9;
        (() => {
            v1[8] = 64 in v6;
            i9--;
        })()) {
    }
    await f3;
    return 1024;
}
f3(1024, f3);
%OptimizeFunctionOnNextCall(f3);
