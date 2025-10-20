function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            return a2;
        }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const t8 = globalThis.performance.measureMemory;
            t8();
        }
        const v15 = new F7(f5, F0);
        function f17() {
            function F18(a20, a21, a22, a23) {
                if (!new.target) { throw 'must be called with new'; }
                function f24() {
                    return F0;
                }
                class C26 extends WeakMap {
                }
                Object.defineProperty(C26, "valueOf", { writable: true, enumerable: true, value: f24 });
                C26["valueOf"]();
                C26.__proto__ = Symbol;
                for (const v30 in C26) {
                }
            }
            new F18(WebAssembly, f5, v15, F0);
            return F0;
        }
        WebAssembly.instantiateStreaming(this, WebAssembly, v15).catch(f17);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v34 = new F0();
class C35 {
    static [v34](a37, a38, a39) {
    }
}
const v40 = class {
}
for (let i43 = 0;
    (() => {
        Uint8ClampedArray[4] = i43;
        return i43 < 20000;
    })();
    i43++) {
}
