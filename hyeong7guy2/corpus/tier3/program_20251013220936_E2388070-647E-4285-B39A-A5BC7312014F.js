const v1 = /abc+/is;
v1.compile() - true;
const v5 = class extends v1.constructor {
}
new v5();
