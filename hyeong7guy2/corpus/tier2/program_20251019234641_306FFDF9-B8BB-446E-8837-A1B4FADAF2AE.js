const v0 = class {
}
const v1 = new v0();
const v2 = [v1];
v2.toJSON = v1;
const v5 = JSON.stringify({ arguments: v2 });
const v6 = JSON.parse;
v6.apply(JSON, [v5]);
