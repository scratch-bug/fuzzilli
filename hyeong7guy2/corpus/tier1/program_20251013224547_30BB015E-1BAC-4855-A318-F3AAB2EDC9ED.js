try {
    function f1() {
        return Map;
    }
    function f2(a3) {
        return Map;
    }
    Object.defineProperty(Map, "constructor", { writable: true, configurable: true, enumerable: true, get: f1, set: f2 });
} catch(e4) {
}
