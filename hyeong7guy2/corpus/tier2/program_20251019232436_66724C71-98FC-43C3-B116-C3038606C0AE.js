function f0() {
    function f1(a2, a3) {
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            try { this.toSorted(); } catch (e) {}
            eval(f1++);
        }
        new F4();
        function* f14(a15, a16) {
            yield "CompileError";
            return a3;
        }
        return a3;
    }
    const v21 = new Worker(f1, { type: "function" });
    return v21;
}
const v22 = { next: f0 };
v22.next();
const t18 = v22.next;
t18();
