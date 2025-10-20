const v1 = Symbol.iterator;
const v3 = {
    [v1]() {
    },
};
class C4 {
}
const v6 = Array();
v6[1] = v3;
v6[12] = C4;
JSON.stringify(v6);
