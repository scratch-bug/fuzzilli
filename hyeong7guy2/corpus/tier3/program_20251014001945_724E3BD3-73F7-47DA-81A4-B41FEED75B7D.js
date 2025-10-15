function f0(a1, a2, a3) {
    const v4 = class {
    }
    v4();
    [v4,"function"];
    return "function";
}
const v11 = new Worker(f0, { type: "function" });
const v12 = v11.terminate;
try { new v12(v12, v12, v12, "function"); } catch (e) {}
