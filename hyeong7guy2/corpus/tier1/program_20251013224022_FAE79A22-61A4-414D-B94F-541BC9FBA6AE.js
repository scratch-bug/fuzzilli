function f0(a1) {
    return {};
}
const v3 = f0(f0);
for (let v4 = 0; v4 < 5; v4++) {
    v3[1] **= -3.0;
    Object.defineProperty(v3, "value", { configurable: true, get: f0, set: f0 });
}
for (let v6 = 0; v6 < 250; v6++) {
}
