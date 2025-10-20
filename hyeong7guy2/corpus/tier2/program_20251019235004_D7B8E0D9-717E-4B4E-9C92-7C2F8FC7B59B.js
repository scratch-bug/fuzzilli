function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9, a10, a11) {
            const v13 = new SharedArrayBuffer();
            const v15 = new DataView(v13);
            try { v15.getInt32(F3); } catch (e) {}
            function F17(a19) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F17(F3);
            try { v15.getInt32(a6); } catch (e) {}
        }
        f8();
        f8(a5, F0, this);
        %OptimizeMaglevOnNextCall(f8);
        f8();
        function f25(a26) {
        }
        return f25;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v27 = new F3(F3, F3);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
