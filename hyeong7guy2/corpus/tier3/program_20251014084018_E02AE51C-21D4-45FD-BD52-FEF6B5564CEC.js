function f1(a2) {
    function f3(a4) {
        return a2;
    }
    Worker(f3, { arguments: 102, type: "function" });
    return f3;
}
try { f1(102); } catch (e) {}
