class C0 {
}
Float32Array.c = Float32Array;
const v2 = class extends C0 {
}
function f4() {
}
function f5() {
    function f6() {
        function F8(a10) {
            if (!new.target) { throw 'must be called with new'; }
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function f15() {
                    function f16(a17) {
                        function F18(a20, a21) {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        const v22 = new F18();
                        const v23 = v22.constructor;
                        function f24(a25) {
                        }
                        Object.defineProperty(v23, "constructor", { configurable: true, value: f24 });
                        gc();
                    }
                    f16();
                    f16();
                    %OptimizeMaglevOnNextCall(f16);
                    return f16;
                }
                Object.defineProperty(this, "toString", { get: f15 });
            }
            const v30 = new F11();
            class C31 {
                static [v30](a33, a34, a35) {
                }
            }
        }
        new F8();
        return { done: true };
    }
    const v38 = { next: f6 };
    v38.next();
    return v38;
}
const v40 = Symbol.iterator;
f4.bind(null, ...{ [v40]: f5 });
