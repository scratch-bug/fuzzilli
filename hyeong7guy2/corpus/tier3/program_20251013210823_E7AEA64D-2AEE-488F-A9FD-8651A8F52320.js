const v0 = class {
}
let v1 = undefined;
class C2 {
    constructor() {
        delete v1.p0;
    }
}
v1 = v0;
new C2();
