class C1 {
}
Object.defineProperty(C1, 1073741823, { writable: true, enumerable: true, value: 10000 });
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f9(a10) {
                const v11 = C1[1073741823];
                v11 / v11;
                return f7;
            }
            const v13 = [F2];
            for (let v14 = 0; v14 < 5; v14++) {
                v14 >> v14;
                v13.forEach(f9);
            }
            return C1;
        }
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
v17.toString();
v17.toString();
