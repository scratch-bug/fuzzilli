const v2 = new Int8Array(4294967295);
function f3() {
    for (const v4 in v2) {
    }
    return f3;
}
Int8Array.constructor = f3;
const v5 = Int8Array.constructor;
try { v5(v5, 4294967295, v5); } catch (e) {}
