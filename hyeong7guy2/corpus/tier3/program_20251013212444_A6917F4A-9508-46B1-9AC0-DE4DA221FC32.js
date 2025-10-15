function f0() {
}
for (let v1 = 0; v1 < 10; v1++) {
    new f0();
}
const v3 = new f0();
const v4 = {};
const t7 = v3.constructor;
t7.prototype = v4;
