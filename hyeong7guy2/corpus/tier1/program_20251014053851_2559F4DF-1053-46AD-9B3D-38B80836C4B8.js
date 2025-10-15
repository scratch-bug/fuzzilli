function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function f10(a11) {
            return a11;
        }
        const v14 = [this];
        new Worker(f10, { arguments: v14, type: "function" });
        return 14;
    }
    f6.call(14);
}
new F1(14, F1, 14);
