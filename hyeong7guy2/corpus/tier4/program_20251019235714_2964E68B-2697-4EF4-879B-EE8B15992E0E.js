async function f1(a2, a3) {
    let [v4,v5,v6] = "NFD";
    let v8 = v4 || 0.058854633090871133;
    ++v8;
    for (let i12 = 0, i13 = 10; i13; i13--) {
    }
    await f1;
    return "NFD";
}
f1("NFD", f1(f1, f1));
%OptimizeFunctionOnNextCall(f1);
