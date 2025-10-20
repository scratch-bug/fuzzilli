const v2 = Symbol.iterator;
const v14 = {
    [v2]() {
        const v13 = {
            next() {
                function f6(a7, a8, a9) {
                    Object.defineProperty(this, 4294967296, { writable: true, configurable: true, value: a9 });
                    return f6;
                }
                new Promise(f6);
                return { done: 10 };
            },
        };
        return v13;
    },
};
class C15 extends Int32Array {
}
new C15(v14);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    function f21() {
        function f22(a23) {
        }
        function F24(a26, a27) {
            if (!new.target) { throw 'must be called with new'; }
            function f28() {
                const v31 = new Proxy(this, {});
                for (const v32 in v31) {
                }
                return this;
            }
            f28();
        }
        new F24();
        return f22;
    }
    Object.defineProperty(this, "toString", { get: f21 });
}
const v35 = new F17();
function f36(a37) {
    return Int32Array;
}
class C38 extends f36 {
    static [v35](a40, a41, a42) {
    }
}
