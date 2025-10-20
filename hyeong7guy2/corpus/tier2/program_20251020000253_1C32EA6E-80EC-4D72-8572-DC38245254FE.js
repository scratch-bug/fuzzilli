let v2 = new Uint32Array(7);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = {};
            v2--;
            const v13 = ArrayBuffer.resize;
            const v14 = [Uint32Array,Uint32Array,Uint32Array,Uint32Array];
            try { v13.apply(a9, v14); } catch (e) {}
            const v16 = v2[2];
            function f17(a18, a19, a20) {
                eval(v16);
                return 7;
            }
            return f7;
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v25 = new F3(v2, v2);
const t25 = v25.toString;
t25();
