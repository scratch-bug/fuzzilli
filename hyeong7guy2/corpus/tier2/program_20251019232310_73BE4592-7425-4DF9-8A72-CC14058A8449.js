const v1 = Symbol.iterator;
function f2(a3, a4, a5) {
    const v11 = {
        construct(a7, a8) {
            ~a8;
            let v10;
            try { v10 = a7.construct(); } catch (e) {}
            return v10;
        },
    };
    try { v11.construct(v1, v1); } catch (e) {}
    v11.construct(v11);
    return f2;
}
const t14 = f2(f2, Symbol, Symbol);
t14(v1, f2, f2);
%OptimizeMaglevOnNextCall(f2);
f2(Symbol, Symbol, Symbol);
