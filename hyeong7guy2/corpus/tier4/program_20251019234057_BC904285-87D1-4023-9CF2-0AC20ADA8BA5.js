function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5) {
        function f6(a7, a8) {
            const v12 = {
                set a(a11) {
                },
                a: 1.1,
            };
            return f6;
        }
        const v15 = new SharedArrayBuffer();
        const v16 = v15.slice();
        Worker(f6);
        return v16;
    }
    new Worker(f4, { type: "function" });
}
new F0(F0, F0);
new F0();
