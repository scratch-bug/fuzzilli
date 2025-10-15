class C4 {
}
function f5(a6, a7) {
    return a7;
}
for (let v8 = 0; v8 < 100; v8++) {
    const v9 = {};
    try { v9(f5, Symbol, Int8Array, 268435440); } catch (e) {}
    let v12 = f5.bind(v9, C4, f5);
    v12();
}
