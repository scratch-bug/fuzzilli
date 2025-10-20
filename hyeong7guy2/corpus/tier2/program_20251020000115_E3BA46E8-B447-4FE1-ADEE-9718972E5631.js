function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function f10(a11) {
            return a5;
        }
        const v14 = [this];
        new Worker(f10, { arguments: v14, type: "function" });
        return Worker;
    }
    f6.call(1463428129);
}
new F1();
