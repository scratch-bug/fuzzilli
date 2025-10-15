function f0() {
}
const v2 = class extends f0 {
}
function f3(a4, a5, a6) {
    for (let v8 = 0; v8 < 5; v8++) {
        Object.defineProperty(a5, this, { set: v8 });
    }
}
try { f3("o7e", v2); } catch (e) {}
new Worker(f3, { type: "function" });
gc();
