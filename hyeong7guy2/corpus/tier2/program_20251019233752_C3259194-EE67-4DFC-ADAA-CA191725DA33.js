const v1 = class extends Array {
}
const v2 = new v1();
Symbol[Symbol.species] = v2;
const v5 = /a[bc]d/dsygm;
Object.defineProperty(v5, "constructor", { writable: true, enumerable: true, value: Symbol });
try { ("toString").split(v5); } catch (e) {}
