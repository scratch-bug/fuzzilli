const v0 = [9007199254740990,257,5,-2100514153];
const v1 = {};
v1.toJSON = v0;
const v2 = {};
v2.toJSON = v1;
const v4 = JSON.stringify(v2);
const v5 = `
    parseInt("und🤯efined");
`;
const v10 = JSON.stringify({ type: v5, Module: v4 });
const v11 = JSON.parse;
v11.apply(JSON, [v10]);
