const v1 = class {
    static 1073741825;
}
const v6 = {};
function f8() {
}
const v9 = new Proxy(f8, v6);
for (let i11 = 0; i11 < 25000; i11++) {
    const v19 = [];
    v19[0];
    Reflect.construct(v9, []);
    v19[0];
}
[];
class C34 {
}
