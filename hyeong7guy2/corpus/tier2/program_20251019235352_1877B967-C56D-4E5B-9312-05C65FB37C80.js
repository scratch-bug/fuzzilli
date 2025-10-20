const v0 = [0];
const v2 = `
    Temporal.from("🙌🏿");
`;
const v6 = { type: v2 };
function f7() {
    return v0;
}
Object.defineProperty(v6, "toJSON", { configurable: true, enumerable: true, get: f7 });
const v9 = JSON.stringify(v6);
const v10 = JSON.parse;
v10.apply(JSON, [v9,Symbol]);
