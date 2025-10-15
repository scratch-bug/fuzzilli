const v1 = class {
}
function f2(a3) {
    return 4294967297n;
}
v1[Symbol.toPrimitive] = f2;
for (let v8 = 0; v8 < 100; v8++) {
    const v10 = class {
        static [v1] = WebAssembly;
    }
}
for (let v11 = 0; v11 < 50; v11++) {
    v11++;
}
