const v1 = Symbol.iterator;
const v10 = {
    [v1]() {
        let v3 = 10;
        const v9 = {
            next() {
                const v7 = v3 == v3--;
                return { done: v7, value: v7 };
            },
        };
        return v9;
    },
};
class C11 {
    n() {
        return super.d;
    }
    get e() {
        return v10;
    }
}
new C11();
const v17 = class {
    static #n(a19) {
        let [v20,v21,v22,...v23] = v10;
        return a19;
    }
    b;
}
new v17();
new v17();
new v17();
new v17();
const v29 = Symbol.iterator;
const v38 = {
    [v29]() {
        let v31 = 10;
        const v37 = {
            next() {
                v31--;
                const v35 = v31 == 0;
                return { done: v35, value: v31 };
            },
        };
        return v37;
    },
};
const v39 = class {
    get e() {
        try {
        } catch(e41) {
        } finally {
        }
        return this;
    }
}
new v39();
new v39();
new v39();
for (let v46 = 0; v46 < 5; v46++) {
    let v47 = 20000;
    v46 < v47;
    v47++;
}
257 !== 257;
const v54 = class {
}
try { v54(); } catch (e) {}
new Uint16Array("318627056");
const v60 = {};
const v61 = {};
268435441n << 268435441n;
