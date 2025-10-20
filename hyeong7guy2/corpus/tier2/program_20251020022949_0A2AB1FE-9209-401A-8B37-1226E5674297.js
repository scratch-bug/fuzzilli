function f0() {
}
const v4 = class {
    static [f0];
}
-1000.0 - -1000.0;
const v8 = new Uint8ClampedArray();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    function f13() {
        function f14(a15) {
            v8.length;
            const v19 = new Int16Array(127);
            function f20() {
                return v19;
            }
            function F21(a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                function f25() {
                    function f26(a27) {
                        try { a27.apply(); } catch (e) {}
                        function F29(a31, a32, a33) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        F29.constructor = f20;
                        const t25 = F29.constructor;
                        const v35 = t25();
                        const v36 = v35[15];
                        v36 >> v36;
                        v35[15];
                        const v40 = eval(v35);
                        v40[25] = v40;
                        return f26;
                    }
                    f26(this);
                    %OptimizeMaglevOnNextCall(f26);
                    return f26;
                }
                Object.defineProperty(this, "toString", { get: f25 });
                f25();
                new.target.prototype = new.target;
            }
            const v44 = new F21();
            v44.toString().name;
        }
        f14();
        f14();
        return f14;
    }
    Object.defineProperty(this, "toString", { get: f13 });
}
const v49 = new F9();
class C51 extends Uint8Array {
    static [v49](a53, a54, a55) {
    }
}
