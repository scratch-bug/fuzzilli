const v4 = JSON.stringify({ a: 7.925606267675164, type: "" });
const v5 = `
    parseInt("und🤯efined");
`;
const v10 = JSON.stringify({ type: v5, Module: v4 });
const v11 = JSON.parse;
v11.apply(JSON, [v10]);
