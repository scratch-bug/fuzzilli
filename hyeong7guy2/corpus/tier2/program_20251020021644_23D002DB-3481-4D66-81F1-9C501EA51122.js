class C0 {
}
const v1 = class extends C0 {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function f10(a11, a12) {
            return this;
        }
        a7[Symbol] = f10;
        try { a8(Symbol, Symbol); } catch (e) {}
        a8.fromCodePoint = f6;
        function f15(a16, a17) {
            a17.c = a16;
            let v18;
            try { v18 = new a16(); } catch (e) {}
            a17.c = a17;
            try { a8.fromCodePoint(); } catch (e) {}
            return v18;
        }
        new Promise(f15);
    }
    f6(F2, v1);
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
new F2();
