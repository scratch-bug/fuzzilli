const v0 = /(?:a?)*/mvsd;
const v21 = {
    construct(a2, a3) {
        let v4 = a2 * a2;
        v4++;
        const v6 = a3.sort();
        const v7 = v6 ?? v6;
        v7 ?? v7;
        let v9 = undefined;
        v9 = v0;
        const v10 = `
        `;
        const v11 = v10.hasOwnProperty();
        const v12 = v11 && v11;
        v12 && v12;
        const t11 = eval.constructor;
        t11();
        eval();
        const v19 = Reflect.construct(a2, a3);
        try { v19.prototype(); } catch (e) {}
        return v19;
    },
};
function f23() {
    return Proxy;
}
const v24 = new Proxy(f23, v21);
for (let v25 = 0; v25 < 50; v25++) {
    Reflect.construct(v24, []);
}
