const v1 = class {
}
const t2 = "536870912";
t2.__proto__ = {};
Object.create({});
for (let i8 = 0;
    i8 < 20000;
    (() => {
        i8++;
        new Uint16Array();
    })()) {
}
class C16 {
    [v1];
}
new C16();
