const v2 = `
    -705860.7938884336 * 4;
    parseInt("und🤯efined");
`;
const v8 = JSON.parse;
try { v8(v2); } catch (e) {}
