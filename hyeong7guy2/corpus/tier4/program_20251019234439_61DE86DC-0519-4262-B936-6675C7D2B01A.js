async function f2(a3, a4) {
    let v5;
    try { v5 = a4(); } catch (e) {}
    for (let i7 = 0, i8 = v5;
        i8;
        (() => {
            const v12 = 64 in v5;
            try { new WeakSet(a4, i8, ...v12, a3); } catch (e) {}
            i8--;
        })()) {
    }
    return await f2;
}
f2(1024, f2);
%OptimizeFunctionOnNextCall(f2);
