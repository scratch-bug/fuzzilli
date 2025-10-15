class C1 {
    static [8n](a3, a4) {
    }
}
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
    }
    Array();
    const v12 = class extends f9 {
    }
    new v12();
    globalThis.obj = { a: 1.1 };
    globalThis.obj;
    Symbol.description;
    function F22(a24, a25) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F22();
    function f27() {
        Symbol.matchAll;
        function f30() {
            Array.toString();
            true && true;
            return { done: true };
        }
        return { next: f30 };
    }
    const v39 = { [Symbol]: f27 };
    v39.name = v39;
    new Uint8Array();
    class C43 {
    }
    try { Symbol.keyFor(); } catch (e) {}
    Symbol.iterator;
    new C43();
    function f47(a48) {
        let v49 = undefined;
        const v50 = {};
        v49 = v50;
        const v52 = {
            next() {
                return this;
            },
        };
        if (a48) {
            v50.p1;
        }
    }
    for (let i55 = 0;
        (() => {
            const v57 = i55 < 20000;
            v57 || v57;
            return v57;
        })();
        i55++) {
        f47();
    }
    f47();
    this.c = 8n;
}
new F5();
new F5(F5);
new WeakSet();
WebAssembly.Instance;
const victim = [];
