const v1 = `
    g("und🤯efined");
`;
const v7 = JSON.stringify({ PI: v1 });
const v8 = JSON.parse;
v8.apply(JSON, [v7,Symbol]);
