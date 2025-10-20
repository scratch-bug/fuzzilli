for (let i2 = 0, i3 = 10; i3; i3--) {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a19;
            }
            const v20 = new F16();
            const v21 = v20.e;
            v21 ^ v21;
            const v26 = Symbol.iterator;
            const v38 = {
                [v26]() {
                    const v36 = {
                        next() {
                            const v33 = Object.values(1000000.0);
                            try { v33.forEach("VW"); } catch (e) {}
                            return { done: 10 };
                        },
                    };
                    v36.next();
                    return v36;
                },
            };
            const v41 = new Int16Array();
            new Date(WeakSet, Date, 882, ...v41, ...v38);
        }
        f14(a11);
        f14();
        %OptimizeMaglevOnNextCall(f14);
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v45 = new F9();
class C46 {
    static [v45](a48, a49, a50) {
    }
}
