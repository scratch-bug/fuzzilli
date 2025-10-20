const v2 = new Int32Array(4294967296);
function f4() {
    function f5() {
        return f5;
    }
    const v8 = [f5,"e",v2];
    Worker(f5, { arguments: v8, type: "function" });
    return "e";
}
try { f4(); } catch (e) {}
