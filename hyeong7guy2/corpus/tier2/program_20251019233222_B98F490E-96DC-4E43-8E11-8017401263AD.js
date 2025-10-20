function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            class C15 extends Uint16Array {
            }
            class C16 extends C15 {
            }
            function f17() {
                return a11;
            }
            function f18(a19) {
                const v21 = eval.bind;
                let v22;
                try { v22 = v21(); } catch (e) {}
                return v22;
            }
            Object.defineProperty(C16, "constructor", { configurable: true, get: f17, set: f18 });
            const v23 = class {
            }
            function F24(a26, a27) {
                if (!new.target) { throw 'must be called with new'; }
                function f28(a29, a30) {
                    return Uint16Array;
                }
                a27.constructor = f28;
            }
            new F24(v23, C16);
        }
        new F8(a5, a3, a7, F0);
        return f4;
    }
    f4(this, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v34 = new F0();
const v35 = new F0();
new F0(v34, v35);
