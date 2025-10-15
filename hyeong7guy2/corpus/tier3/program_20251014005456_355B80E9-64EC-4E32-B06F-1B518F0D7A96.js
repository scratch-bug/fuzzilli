const v4 = {};
const v5 = class {
}
try { v5(); } catch (e) {}
function f7() {
    function f8(a9) {
    }
    new Worker(f8, { type: "function" });
    return f7;
}
const t10 = f7();
t10();
