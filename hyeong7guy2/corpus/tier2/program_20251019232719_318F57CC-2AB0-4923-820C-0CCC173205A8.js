function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = class extends Uint32Array {
        constructor(a12) {
            super();
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function f17() {
                    function f18(a19) {
                        function f20() {
                            ("p").blink();
                            ("p").codePointAt();
                        }
                        f20();
                        f20();
                    }
                    f18();
                    f18();
                    %OptimizeMaglevOnNextCall(f18);
                    return f18;
                }
                Object.defineProperty(this, "toString", { get: f17 });
            }
            const v28 = new F13();
            class C29 {
                static [v28](a31, a32, a33) {
                }
            }
        }
    }
    new v10();
}
new F3(F0);
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    function f41() {
    }
    function f42(a43, a44) {
        return this;
    }
    f41.constructor = f41;
    class C45 extends f41 {
    }
    const v46 = C45.constructor;
    let v47;
    try { v47 = v46(); } catch (e) {}
    try { v47.isNaN(); } catch (e) {}
}
new F36();
