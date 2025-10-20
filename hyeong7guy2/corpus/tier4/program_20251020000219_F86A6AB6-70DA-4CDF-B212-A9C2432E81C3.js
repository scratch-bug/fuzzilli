function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8() {
            if (!new.target) { throw 'must be called with new'; }
            let v10 = 1;
            v10--;
            const v12 = `compileStreaming${v10}268435440`;
            v12[18] = v12;
        }
        new F8();
        return a3;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v15 = new F0();
const t17 = v15.constructor;
new t17();
new F0(v15, v15);
