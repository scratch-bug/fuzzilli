const v2 = `
    parseInt("und🤯efined");
`;
const v8 = JSON.stringify({ 126: "c", type: v2 });
const v9 = JSON.parse;
v9.apply(JSON, [v8,Symbol]);
