try {
    function f1(a2) {
        return a2;
    }
    Object.defineProperty(115, "valueOf", { writable: true, value: f1 });
} catch(e3) {
}
