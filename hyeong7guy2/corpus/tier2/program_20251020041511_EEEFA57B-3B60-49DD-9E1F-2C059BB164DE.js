const v1 = {};
v1.toJSON = Date;
const v3 = JSON.stringify(v1);
const v4 = `
    parseInt("und🤯efined");
`;
const v9 = JSON.stringify({ type: v4, Module: v3 });
const v10 = JSON.parse;
v10.apply(JSON, [v9]);
