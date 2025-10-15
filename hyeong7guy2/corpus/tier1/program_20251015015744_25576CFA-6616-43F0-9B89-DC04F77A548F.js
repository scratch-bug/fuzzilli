new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t3 = globalThis.performance.measureMemory;
    t3();
}
new F2();
new Map();
function f16() {
}
new Float32Array();
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    function F24(a26, a27) {
        if (!new.target) { throw 'must be called with new'; }
        a27++;
        this.e = a27;
    }
}
Symbol.iterator;
function f30(a31, a32) {
    for (let v34 = 0; v34 < 25; v34++) {
        function F35(a37, a38) {
            if (!new.target) { throw 'must be called with new'; }
            function f39() {
                function f40(a41) {
                    function F43() {
                        if (!new.target) { throw 'must be called with new'; }
                        const v47 = {};
                    }
                    new F43();
                    for (let i50 = 8; i50 < 20000;) {
                        i50 ? {} : Object;
                    }
                }
                return f40;
            }
            Object.defineProperty(this, "toString", { get: f39 });
        }
        new F35();
        "p" + v34;
    }
}
new Worker(f30, { type: "function" });
