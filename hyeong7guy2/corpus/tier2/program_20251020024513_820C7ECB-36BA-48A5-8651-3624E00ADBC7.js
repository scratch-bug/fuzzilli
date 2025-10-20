const v0 = `
    const t1 = "Australia/D\rwin";
    t1();
`;
const v5 = JSON.stringify({ type: v0 });
const v6 = JSON.parse;
v6.apply(JSON, [v5]);
