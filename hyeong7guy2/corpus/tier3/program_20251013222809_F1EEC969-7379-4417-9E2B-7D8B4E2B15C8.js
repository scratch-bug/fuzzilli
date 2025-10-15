const v1 = class {
    ["number"];
}
const v2 = new v1();
const v3 = { ...v2 };
