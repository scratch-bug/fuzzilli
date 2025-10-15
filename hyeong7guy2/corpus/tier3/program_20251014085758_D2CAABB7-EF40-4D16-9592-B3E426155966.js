function f0() {
}
try {
    let v1 = 128;
    v1[0] = 1.1;
    for (let i4 = 0; i4 < 30000; i4++) {
        v1[0] = v1;
        v1 = [i4,i4];
    }
} catch(e11) {
}
eval("function f() { return 1; }");
