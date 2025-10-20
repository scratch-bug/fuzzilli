const v2 = class {
}
const v3 = [36603,-4,v2];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = `
        parseInt("und🤯efined");
    `;
    const v13 = { type: v9 };
    v13.toJSON = v3;
    const v14 = JSON.stringify(v13);
    const v15 = JSON.parse;
    v15.apply(JSON, [v14]);
}
new F4();
