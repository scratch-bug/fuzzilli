function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v9 = class {
}
const v10 = [255,v4];
Reflect.apply(("values").padStart, "e", v10)[0];
