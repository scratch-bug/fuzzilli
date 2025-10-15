const v2 = [,];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            let v10 = -1098098658;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v16 = new F12(f8, Int32Array);
            v16.constructor.prototype;
            let v19 = 30349n;
            const v21 = -9007199254740990 >> a5;
            const v22 = v21 / v21;
            ({"b":v19,"e":v10,...Int32Array} = F12);
            const v25 = { maxByteLength: 3725 };
            function F26(a28, a29, a30, a31) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F26(268435441, a9, undefined, v22);
            const t20 = v2.constructor;
            t20(v21, F3, F3, this);
            const v36 = new ArrayBuffer(3725, v25);
            const t23 = -9007199254740990;
            t23.c = -9007199254740990;
            const v38 = new Float32Array(v36);
            const v39 = v38.slice(3725, 3725);
            try { v39.indexOf(a5, 3725); } catch (e) {}
        }
        f8();
        f8();
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v43 = new F3();
class C44 {
    static [v43](a46, a47, a48) {
    }
}
