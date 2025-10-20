function f0() {
}
class C1 extends f0 {
}
const v2 = new C1();
const v4 = `
    parseInt("und🤯efined");
`;
const v8 = { type: v4 };
v8.toJSON = v2;
const v10 = JSON.stringify(v8);
const v11 = JSON.parse;
v11.apply(JSON, [v10,Symbol]);
