const v2 = `
    Temporal.from("🙌🏿");
`;
const v7 = {
    type: v2,
    get e() {
        return true;
    },
};
const v9 = JSON.stringify(v7);
const v10 = JSON.parse;
v10.apply(JSON, [v9,Symbol]);
