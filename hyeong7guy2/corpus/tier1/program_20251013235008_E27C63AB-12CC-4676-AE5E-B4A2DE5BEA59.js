Symbol();
const v2 = Symbol.iterator;
const v11 = {
    [v2]() {
        let v4 = 10;
        const v10 = {
            next() {
                v4--;
                const v8 = v4 == 0;
                return { done: v8, value: v4 };
            },
        };
        return v10;
    },
};
function F13(a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = Float64Array;
}
const v18 = new F13(v11, F13, Symbol);
const t20 = v18.e;
new t20(v11);
const v21 = async () => {
    for (let i27 = 0;
        (() => {
            const v29 = i27 < 20000;
            !v29;
            return v29;
        })();
        ) {
        ++i27;
    }
    const v47 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,1,124,0]);
    /1W(?<a>)/mu;
    Symbol >>> Symbol;
    WebAssembly.instantiate(v47);
    return v11;
};
v21();
