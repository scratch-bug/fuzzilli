const v0 = [-11,4294967296,9223372036854775807,-1024];
function f1() {
}
class C2 extends f1 {
}
const v3 = new C2();
Object.defineProperty(v3, "toJSON", { configurable: true, enumerable: true, value: v0 });
const v5 = `
    parseInt("und🤯efined");
`;
const v9 = { type: v5 };
v9.toJSON = v3;
const v11 = JSON.stringify(v9);
const v12 = JSON.parse;
v12.apply(JSON, [v11,Symbol]);
