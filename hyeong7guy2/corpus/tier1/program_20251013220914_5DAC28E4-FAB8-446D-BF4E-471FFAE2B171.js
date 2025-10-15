let trigger = false;
class C2 {
}
const v5 = new Proxy(C2, {});
new v5(trigger, trigger, false, v5);
let v7 = 1142633321;
class C8 {
}
function f9(a10, a11) {
    return a10;
}
const v13 = new Proxy(C8, { construct: f9 });
for (let i15 = 0;
    i15 < 25000;
    (() => {
        ++i15;
        v7++;
        const v21 = {};
    })()) {
    new v13();
}
function f24() {
    return v7;
}
class C25 extends f24 {
}
new C25();
