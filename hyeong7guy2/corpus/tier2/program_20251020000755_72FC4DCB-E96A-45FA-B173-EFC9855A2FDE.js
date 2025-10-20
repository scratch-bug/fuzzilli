const v1 = `
    parseInt("und🤯efined");
`;
const v7 = JSON.stringify({ e: v1 });
const v8 = JSON.parse;
v8.apply(JSON, [v7,16]);
