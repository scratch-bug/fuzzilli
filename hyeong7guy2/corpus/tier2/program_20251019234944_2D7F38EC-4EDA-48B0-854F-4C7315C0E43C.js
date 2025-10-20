const v3 = new Int32Array(129);
v3.toJSON = "with";
const v5 = `
    Temporal.from("🙌🏿");
`;
const v9 = { type: v5 };
v9.toJSON = v3;
const v11 = JSON.stringify(v9);
const v12 = JSON.parse;
v12.apply(JSON, [v11,Symbol]);
