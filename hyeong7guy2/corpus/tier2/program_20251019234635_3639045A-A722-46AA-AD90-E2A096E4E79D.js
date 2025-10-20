const v0 = [];
const v2 = `
    Temporal.from("🙌🏿");
`;
const v6 = { type: v2 };
v6.toJSON = v0;
const v8 = JSON.stringify(v6);
const v9 = JSON.parse;
v9.apply(JSON, [v8,Symbol]);
