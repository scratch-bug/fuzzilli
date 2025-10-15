const v1 = new Int8Array();
function f2(a3) {
    let v4 = -1e-15;
    v4--;
    return v4.toLocaleString();
}
Object.defineProperty(v1, "valueOf", { configurable: true, enumerable: true, value: f2 });
v1[8] = v1;
