const v1 = class {
}
class C2 extends v1 {
}
for (let v3 = 0; v3 < 250; v3++) {
    const v4 = class {
    }
    v4.g = v3;
    v4.g = v4;
    typeof C2;
}
