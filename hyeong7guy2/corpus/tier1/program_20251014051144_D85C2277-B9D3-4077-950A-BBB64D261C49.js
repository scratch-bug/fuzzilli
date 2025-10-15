function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function f10(a11) {
            for (let [v12,,...v13] of 666) {
                function f14(a15, a16) {
                    return v12;
                }
            }
            return a11;
        }
        const v19 = [this];
        new Worker(f10, { arguments: v19, type: "function" });
        return this;
    }
    f6();
}
new F1(666, F1, F1);
