const v0 = `
    parseInt("und🤯efined");
    const t1 = "Australia/D\rwin";
    t1(parseInt, parseInt, "Australia/D\rwin", v0);
`;
const v8 = JSON.stringify({ type: v0 });
const v9 = JSON.parse;
v9.apply(JSON, [v8]);
