class C1 {
}
const v2 = new C1();
const v3 = { [9007199254740991]: v2 };
const v7 = [JSON.stringify(v3)];
Reflect.apply(JSON.parse, v3, v7);
