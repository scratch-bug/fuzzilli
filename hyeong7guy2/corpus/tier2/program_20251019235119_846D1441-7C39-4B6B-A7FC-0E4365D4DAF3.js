const v1 = new Date();
function f2() {
    return v1;
}
Object.defineProperty(v1, "constructor", { configurable: true, value: f2 });
for (let v3 = 0; v3 < 100; v3++) {
    const t6 = v1.constructor;
    t6().setDate(v3);
}
