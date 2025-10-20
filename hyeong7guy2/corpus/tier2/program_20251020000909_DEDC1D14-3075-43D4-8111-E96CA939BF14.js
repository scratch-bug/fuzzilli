function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                const v7 = [1000000.0,0.0,3.0,805487.0054769053,6.362316891529741,-4.0,478.9701221424302,921.7763677565181];
                v7[793] = f5;
                function f8(a9, a10, a11) {
                    return a9;
                }
                const v14 = { type: "function", arguments: v7 };
                const v15 = new Worker(f8, v14);
                v15.postMessage(v14);
            } catch(e17) {
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
