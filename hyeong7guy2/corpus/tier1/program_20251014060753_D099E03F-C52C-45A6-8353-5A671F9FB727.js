try {
    const v0 = {};
    v0.toJSON = v0;
    function f1(a2, a3, a4) {
        return a3;
    }
    const v7 = ["function",v0];
    Worker(f1, { arguments: v7, type: "function" });
} catch(e10) {
}
