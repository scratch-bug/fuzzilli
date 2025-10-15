function f0() {
    return f0;
}
class C3 {
}
C3.constructor = Date;
const v4 = C3.constructor;
const v5 = new v4(v4, v4, f0, v4);
v5.setUTCHours(f0, f0, f0, -997415.1913328063);
