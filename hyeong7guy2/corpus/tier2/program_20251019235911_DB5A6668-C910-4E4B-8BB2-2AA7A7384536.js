try {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v4 = class extends F0 {
    }
    -11680 * -11680;
    function F8(a10) {
        if (!new.target) { throw 'must be called with new'; }
        try { this.h = this; } catch (e) {}
    }
    const v14 = class extends F8 {
    }
    const v17 = new Uint32Array(Uint32Array);
    function F18(a20, a21) {
        if (!new.target) { throw 'must be called with new'; }
        a20 ?? a20;
        function f23() {
            function f24(a25) {
                function f26(a27) {
                    a27 ?? a27;
                    v17[2] &= 9007199254740992;
                    return v17;
                }
                f26.call();
                f26.call();
            }
            f24();
            f24();
            %OptimizeMaglevOnNextCall(f24);
            return f24;
        }
        Object.defineProperty(this, "toString", { get: f23 });
        -0;
        'use strict';
    }
    const v35 = new F18();
    v35.constructor;
    class C37 {
    }
    v4 < v35;
    const v39 = {};
    const v40 = {};
    v40.c = v40;
} catch(e41) {
}
