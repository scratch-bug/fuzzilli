const v0 = `
    parseInt("und🤯efined");
`;
const v7 = [JSON.stringify({ e: v0 })];
function F8() {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = { done: v7 };
    const t7 = JSON.stringify;
    t7(v10);
    for (let i15 = 9007199254740991, i16 = 10; i16; i16--) {
    }
}
new F8();
