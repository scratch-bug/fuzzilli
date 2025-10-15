const v0 = [-988.1210532502116,-528225.448451255,-7.017990679657562e+307,0.09447722074299258,0.23783320816225184,-3.0];
function f1() {
    return v0;
}
const v6 = new Uint32Array(128);
function f7() {
    return v6;
}
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a12;
    this.d = a13;
    this.a = false;
}
const v14 = new F8(-63266n, Uint32Array, false, 128);
new F8(128, v0, v6, -63266n);
const v19 = Symbol.iterator;
const v28 = {
    [v19]() {
        let v21 = 10;
        const v27 = {
            next() {
                v21--;
                const v25 = v21 == 0;
                return { done: v25, value: v21 };
            },
        };
        return v27;
    },
};
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v19;
    this.f = a32;
}
new F29(v14, Uint32Array);
const v34 = new F29(16, "bigint");
const v35 = new F29(v28, v34);
const v39 = { execution: "async" };
v39.flavor = Symbol;
gc(v39);
function f41() {
}
const v43 = WebAssembly.instantiateStreaming();
function f44(a45, a46) {
    return v35;
    function F47(a49, a50) {
        if (!new.target) { throw 'must be called with new'; }
        const v51 = a49 > a50;
        try {
            new F47(a49, v51);
        } catch(e53) {
        }
    }
    return v39;
}
Object.defineProperty(v43, "constructor", { writable: true, configurable: true, enumerable: true, value: f44 });
v43.catch(f41);
function f55(a56) {
    257 >= 100000;
    for (let i60 = 0;
        (() => {
            const v62 = i60 < 20000;
            v62 || v62;
            return v62;
        })();
        ) {
    }
    function f67() {
    }
    f67[Symbol] = Symbol;
}
new Worker(f55, { type: "function" });
