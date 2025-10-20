function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8() {
            return a5;
        }
        function f9(a10, a11) {
            return this;
        }
        f8.constructor = f9;
        class C12 extends f8 {
        }
        const v13 = C12.constructor;
        function F14(a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v17 = class extends F14 {
        }
        function F18(a20, a21) {
            if (!new.target) { throw 'must be called with new'; }
            function f22(a23, a24, a25) {
                function F26(a28, a29, a30, a31) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f32() {
                    }
                    function f33(a34) {
                        function F35(a37) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                    }
                    Object.defineProperty(this, "e", { get: f32, set: f33 });
                }
            }
            %OptimizeFunctionOnNextCall(f22);
        }
        new F18();
        new F18(v17, F0);
        new F18();
        const v41 = `string`;
        v13().encodeURI(f4);
        return v41;
    }
    f4(this, a3, F0);
}
new F0(F0, F0);
