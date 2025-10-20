function f2(a3) {
    for (let v4 = 0; v4 < 5; v4++) {
        function f5(a6, a7) {
            const v8 = a7.codePointAt(f5, v4, a3, a3);
            const v9 = v8 % v8;
            try { SharedArrayBuffer.bind(v9); } catch (e) {}
            const v13 = [-363164.38229306566,7.469110414654437e+307,5.961845426595853e+307,4.0,-5.0,-3.8092974071593746e+307,0.8512263276531];
            function F14() {
                if (!new.target) { throw 'must be called with new'; }
                Temporal(v13);
            }
            const v18 = eval();
            v18 ?? v18;
            return a3;
        }
        f5(f5, a3);
        %OptimizeFunctionOnNextCall(f5);
    }
}
function F21(a23) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i26 = 0, i27 = 10; i27; i27--) {
}
F21[Symbol.toPrimitive] = f2;
const v37 = {
    o(a35, a36) {
        super[F21] = 12234;
        return a36;
    },
};
v37.o(Symbol, Symbol);
