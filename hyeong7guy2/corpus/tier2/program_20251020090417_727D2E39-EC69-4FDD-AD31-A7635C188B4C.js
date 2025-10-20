const v0 = /(?:a?)*/dvi;
const v1 = `
    parseInt("und🤯efined");
`;
const v7 = JSON.stringify({ e: v1 });
v0.constructor.escape(v7);
