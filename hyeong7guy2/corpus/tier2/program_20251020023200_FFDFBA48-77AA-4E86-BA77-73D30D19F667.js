const v1 = class {
}
class C2 extends v1 {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function F7(a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        function f11() {
            function f12(a13) {
                const v15 = new Int16Array();
                const v16 = v15.length;
                const v17 = { millisecond: v16, 1900717726: C2 };
            }
            f12();
            f12();
            %OptimizeMaglevOnNextCall(f12);
            return f12;
        }
        Object.defineProperty(this, "toString", { get: f11 });
    }
    const v20 = new F7();
    class C21 {
        static [v20](a23, a24, a25) {
        }
    }
}
new F3();
