function f2(a3) {
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v11 = {};
                try { v11(); } catch (e) {}
                for (let v13 = 0; v13 < 5; v13++) {
                    Math.abs(v13);
                }
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v16 = new F4(Symbol, F4);
    class C17 {
        static [v16](a19, a20, a21) {
        }
        static [v16](a23, a24, a25) {
        }
    }
}
function F26(a28) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i31 = 0, i32 = 10; i32; i32--) {
}
F26[Symbol.toPrimitive] = f2;
const v42 = {
    o(a40, a41) {
        super[F26] = 12234;
        return Symbol;
    },
};
v42.o();
