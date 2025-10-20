function f0() {
    function f1(a2, a3) {
        return f1;
    }
    const v7 = new Worker(f1, { type: "function" });
    return v7;
}
const v8 = { next: f0 };
const v9 = v8.next(v8, v8);
v9.terminateAndWait();
const t9 = v8.next;
const v13 = t9().terminateAndWait;
try { new v13(v9, v13, f0, v8); } catch (e) {}
