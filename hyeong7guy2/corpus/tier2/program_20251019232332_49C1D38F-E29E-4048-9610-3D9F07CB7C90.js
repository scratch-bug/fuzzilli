class C1 {
}
function f2(a3) {
    try { a3.call(); } catch (e) {}
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                function f12(a13) {
                    C1[1073741823];
                    C1[Symbol.asyncIterator] = C1;
                    return this;
                }
                const v16 = [F5];
                for (let v17 = 0; v17 < 5; v17++) {
                    v16.forEach(f12);
                }
                a11 & a11;
                return a3;
            }
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v20 = new F5(F5, a3);
    return v20.toString();
}
f2(f2);
