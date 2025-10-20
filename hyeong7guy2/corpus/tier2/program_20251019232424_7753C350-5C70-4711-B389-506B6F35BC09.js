function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return f5;
        }
        function f8() {
            return f8;
        }
        function f9() {
            function f10() {
                const v12 = Array(1048576);
                v12.pop();
                v12.push(1048576);
                const v16 = { done: true };
                for (const v17 in v12) {
                }
                return v16;
            }
            return { next: f10 };
        }
        const v20 = Symbol.iterator;
        f8.bind(null, ...{ [v20]: f9 });
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v24 = new F0();
v24.toString();
