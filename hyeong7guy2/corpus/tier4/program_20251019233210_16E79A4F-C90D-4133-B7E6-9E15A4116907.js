const v1 = class {
}
v1.importedStringConstants = "4";
const v4 = new Int8Array(4096);
WebAssembly.validate(v4, v1);
