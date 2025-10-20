class C1 extends Date {
}
const v4 = ["+01:00"];
Reflect.apply(Date.parse, C1, v4);
