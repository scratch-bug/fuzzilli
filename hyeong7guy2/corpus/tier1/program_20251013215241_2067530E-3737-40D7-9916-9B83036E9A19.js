function f0(a1) {
    for (let v2 = 0; v2 < 10; v2++) {
    }
    return a1;
}
new Worker(f0, { type: "function" });
for (let i8 = 0; i8 < 20000; i8++) {
}
