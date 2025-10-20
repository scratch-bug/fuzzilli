const v1 = `
    parseInt("und🤯efined");
`;
const v6 = JSON.stringify(v1);
const v7 = JSON.parse;
v7.apply(JSON, [v6,Symbol]);
