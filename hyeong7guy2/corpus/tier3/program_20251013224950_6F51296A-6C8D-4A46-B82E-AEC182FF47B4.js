const v1 = [];
const v2 = v1.fill;
try { v2(); } catch (e) {}
function f4(a5, a6) {
    return 8;
}
const v9 = { type: "function" };
const v10 = new Worker(f4, v9);
v10.terminate(v9, 8, v1, v1, v1);
