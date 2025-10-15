const v0 = async () => {
    return v0;
};
const v1 = v0();
function f2() {
    return f2;
}
f2[Symbol.species] = f2;
v1.constructor = f2;
try { v1.catch(f2); } catch (e) {}
