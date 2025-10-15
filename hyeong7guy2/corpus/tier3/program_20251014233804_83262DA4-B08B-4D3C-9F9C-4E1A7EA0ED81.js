const v1 = Symbol.toPrimitive;
class C2 {
}
const v3 = new C2();
v3.toJSON = v1;
const t5 = v3.constructor;
const v5 = new t5();
const v6 = [v3];
v6.toJSON = v5;
JSON.stringify(v6);
