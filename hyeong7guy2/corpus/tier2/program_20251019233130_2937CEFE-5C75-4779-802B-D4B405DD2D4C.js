const v1 = new Int8Array();
function f2(a3) {
    return a3;
}
Object.defineProperty(v1, "valueOf", { configurable: true, enumerable: true, value: f2.bind() });
v1[8] = v1;
