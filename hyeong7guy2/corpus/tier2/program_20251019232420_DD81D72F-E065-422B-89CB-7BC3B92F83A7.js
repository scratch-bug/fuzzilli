function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8() {
            if (!new.target) { throw 'must be called with new'; }
            Object.defineProperty(Date, "a", { enumerable: true, value: `compileStreaming${1}268435440` });
        }
        const v13 = new F8();
        return v13;
    }
    f4(f4, f4, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v15 = new F0();
const t14 = v15.constructor;
new t14();
new F0();
