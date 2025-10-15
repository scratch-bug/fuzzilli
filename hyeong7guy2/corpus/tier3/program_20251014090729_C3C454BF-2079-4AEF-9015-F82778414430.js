function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = class {
}
for (let i5 = 0; i5 < 1000; i5++) {
    let v11 = undefined;
    const v12 = [];
    v11 = v12;
    async function f13() {
        await v12;
        Error();
        return v3;
    }
    const v17 = f13();
    f13 > v2 ? f13 : v2;
    const v21 = new Date();
    v21.setMonth(i5);
    v17.catch();
}
