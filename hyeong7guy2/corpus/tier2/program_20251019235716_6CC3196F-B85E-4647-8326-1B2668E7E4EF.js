const v1 = [-4.0,-4.0];
const v2 = `
    parseInt("und🤯efined");
`;
const v6 = { type: v2 };
v6.toJSON = v1;
const v8 = JSON.stringify(v6);
const v9 = JSON.parse;
v9.apply(JSON, [v8]);
