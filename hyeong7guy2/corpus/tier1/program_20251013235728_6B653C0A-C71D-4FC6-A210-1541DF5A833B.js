const v2 = class {
}
function f3(a4) {
    return 4294967297n;
}
v2[Symbol.toPrimitive] = f3;
for (let v7 = 0; v7 < 100; v7++) {
    try { WebAssembly.Exception(v7, WebAssembly); } catch (e) {}
    const v10 = class {
        static [v2] = WebAssembly;
    }
    v10[4294967297] = v10;
}
