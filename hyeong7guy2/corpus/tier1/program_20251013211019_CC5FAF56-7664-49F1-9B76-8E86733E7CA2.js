const v0 = class {
    static #m() {
        super.a;
    }
    static #toString() {
    }
}
do {
    let v5;
    try { v5 = v0.normalize(); } catch (e) {}
    v0[v5];
    break;
    const v7 = %WasmStruct();
} while (3)
new v0();
("qUIb").normalize("NFKC");
const v15 = {
    get a() {
        return this;
    },
};
const v17 = Object.create(v15);
function f18(a19, a20) {
    a19.a = a20;
}
for (let i24 = (() => {
        try {
            v17.pop("NFKC", v17, "NFKC", v0, f18);
        } catch(e22) {
        }
        return 0;
    })();
    i24 < 20000;
    i24++) {
    const v30 = {};
    const v33 = i24 % 2 ? v30 : v17;
    f18(v33, {});
}
let victim = { a: 1.1, b: 2.2 };
f18(victim, {});
