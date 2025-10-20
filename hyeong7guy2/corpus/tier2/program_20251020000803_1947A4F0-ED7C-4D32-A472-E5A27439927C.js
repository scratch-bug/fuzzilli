function f1() {
    return f1;
}
const v2 = ["timeZoneId",f1,"timeZoneId"];
const v5 = JSON.stringify({ arguments: v2 });
const v6 = `
    parseInt("und🤯efined");
`;
JSON.stringify({ type: v6, Module: v5 });
