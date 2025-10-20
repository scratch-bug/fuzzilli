const v0 = [];
for (let i6 = 0, i7 = 10; i7; i7--) {
}
function f13(a14) {
    function F15(a17, a18) {
        if (!new.target) { throw 'must be called with new'; }
        function f19() {
            function f20(a21) {
                function f22(a23, a24, a25, a26) {
                    Uint32Array["map"](f22, a18);
                    return "map";
                }
                try { f22(v0); } catch (e) {}
            }
            %OptimizeMaglevOnNextCall(f20);
            return f20;
        }
        Object.defineProperty(this, "toString", { get: f19 });
    }
    const v30 = new F15(f13, F15);
    class C31 {
        static [v30](a33, a34, a35) {
        }
        static [v30](a37, a38, a39) {
        }
        static [v30](a41, a42, a43) {
        }
    }
}
function F44(a46) {
    if (!new.target) { throw 'must be called with new'; }
}
const v47 = Symbol.toPrimitive;
F44[v47] = f13;
const v51 = {
    o(a49, a50) {
        super[F44] = 12234;
        return F44;
    },
};
v51.o(v0, v47);
