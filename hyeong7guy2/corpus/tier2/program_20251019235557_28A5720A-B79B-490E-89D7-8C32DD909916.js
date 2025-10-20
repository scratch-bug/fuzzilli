function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            return a4;
        }
        function f9() {
            return -886.767714496115;
        }
        function f10() {
            function f11() {
                const v13 = Array(1048576);
                v13[1048575] = -886.767714496115;
                const v15 = { done: true };
                for (const v16 in v13) {
                }
                return v15;
            }
            return { next: f11 };
        }
        const v19 = Symbol.iterator;
        f9.bind(null, ...{ [v19]: f10 });
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v23 = new F1();
v23.toString();
