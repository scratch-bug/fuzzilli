const v1 = [-4.0];
const v2 = { ..."4" };
v1.__proto__ = v2;
Object.seal(v2);
