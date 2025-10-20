const v3 = [Int8Array,16];
const v4 = `
    parseInt("und🤯efined");
`;
const v10 = JSON.stringify({ arguments: v3, type: v4 });
const v11 = JSON.parse;
v11.apply(JSON, [v10,Symbol]);
