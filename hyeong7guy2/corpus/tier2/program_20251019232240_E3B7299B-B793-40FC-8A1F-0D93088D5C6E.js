function f1() {
    function f3(a4, a5, a6, a7) {
        return f1;
    }
    function f8(a9, a10) {
        return "🙌🏿";
    }
    f3.toString = f8;
    const v11 = f3.toString();
    for (let v12 = 0; v12 < 5; v12++) {
        const v14 = Object(v11);
        function f15() {
            return Object;
        }
        function f16(a17) {
            return a17;
        }
        Object.defineProperty(v14, "valueOf", { configurable: true, enumerable: true, get: f15, set: f16 });
    }
    return v11;
}
Set.valueOf = f1;
--Set;
