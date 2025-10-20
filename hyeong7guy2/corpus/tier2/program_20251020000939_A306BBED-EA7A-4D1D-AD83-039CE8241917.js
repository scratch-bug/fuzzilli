const v0 = [-501654.06031238893,5.0,-5.0,1000000000.0,196.2453811472992];
const v1 = `
    parseInt("und🤯efined");
`;
const v7 = JSON.stringify({ e: v1, arguments: v0 });
const v8 = JSON.parse;
v8.apply(JSON, [v7]);
