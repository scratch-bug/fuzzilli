function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return this;
            }
            const v16 = WebAssembly.instantiateStreaming();
            v16.catch(f15, v16, WebAssembly);
        }
        const v18 = new F8(F0, a3, a6, a2);
        return v18;
    }
    f4(a3, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v20 = new F0();
new F0(F0, v20);
new F0();
