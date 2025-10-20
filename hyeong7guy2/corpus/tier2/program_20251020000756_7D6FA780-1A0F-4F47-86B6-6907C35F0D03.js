const v2 = `
    parseInt("und🤯efined");
`;
const v7 = JSON.stringify({ type: v2, Module: "" });
const v8 = JSON.parse;
v8.apply(JSON, [v7]);
