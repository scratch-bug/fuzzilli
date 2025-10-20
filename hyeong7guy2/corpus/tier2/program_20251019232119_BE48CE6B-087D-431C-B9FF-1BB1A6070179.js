const v0 = [0,129,9,-59891,-1654213307];
const v1 = [1073741824,1073741824,-1844945459,-14,-9007199254740991];
const v2 = `
    parseInt("und🤯efined");
`;
const v8 = JSON.stringify({ type: v2, 8: v1, g: v0 });
const v9 = JSON.parse;
v9.apply(JSON, [v8]);
