try {
    function f1(a2) {
        return f1;
    }
    const v5 = { type: "function" };
    v5.arguments = 1;
    Worker(f1, v5);
} catch(e7) {
}
