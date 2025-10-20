function f1() {
    function f3(a4, a5, a6, a7) {
        return f1;
    }
    const v8 = f3("🙌🏿");
    const v9 = v8.toString(v8, v8, Set, f3);
    for (let v10 = 0; v10 < 5; v10++) {
        const v12 = Object(v9);
        function f13() {
            return f13;
        }
        function f14(a15) {
            return a15;
        }
        Object.defineProperty(v12, "valueOf", { configurable: true, enumerable: true, get: f13, set: f14 });
    }
    return v9;
}
Set.valueOf = f1;
--Set;
