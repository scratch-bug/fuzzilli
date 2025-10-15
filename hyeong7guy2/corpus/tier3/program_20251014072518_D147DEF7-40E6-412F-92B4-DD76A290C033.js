const v1 = {};
function f2() {
}
const v3 = class extends f2 {
}
const v4 = new v3();
[v4,v1,f2];
class C6 {
}
function f8() {
}
class C9 extends f8 {
}
const v10 = {};
for (let v11 = 0; v11 < 250; v11++) {
    const v12 = {};
    let v14 = v11 % 2;
    v14++;
    for (let v16 = 0; v16 < 50; v16++) {
    }
    const v17 = v14 ? v12 : v10;
    try { new Symbol(); } catch (e) {}
    v17.isPrototypeOf();
}
