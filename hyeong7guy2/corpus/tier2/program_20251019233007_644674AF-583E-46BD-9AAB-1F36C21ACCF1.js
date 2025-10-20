const v1 = Symbol.iterator;
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8, a9, a10) {
        function f11(a12) {
            return f7;
        }
        const v15 = [this];
        new Worker(f11, { arguments: v15, type: "function" });
        return this;
    }
    f7.call(v1);
}
new F2(F2, F2, v1);
