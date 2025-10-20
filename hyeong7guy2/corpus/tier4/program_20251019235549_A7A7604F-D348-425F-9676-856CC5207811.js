const v1 = class {
    toString(a3) {
        const v4 = this.__lookupSetter__;
        try { new v4(); } catch (e) {}
        super[this];
    }
}
const v7 = new v1();
const v9 = [-5.0,v1,v7];
const v12 = Symbol.iterator.description;
try { v12.replace(0, v9); } catch (e) {}
