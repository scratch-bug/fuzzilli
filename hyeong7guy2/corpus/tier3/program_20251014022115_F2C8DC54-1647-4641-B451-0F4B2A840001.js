function f2() {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        function f9(a10, a11) {
            function f13(a14) {
                for (; !10;) {
                }
            }
            this.onmessage = f13;
        }
        const v18 = {};
        Worker(f9, v18, v18, this, f2);
    }
    new Worker(f7, { type: "function" });
}
new F3();
new F3();
