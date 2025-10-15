function f0(a1, a2) {
    a1[0];
    new a2();
    a1[0];
}
let side_effect_array = [1337];
let v9 = false;
function f10(a11, a12) {
    if (v9) {
        side_effect_array[0] = 1.1;
    }
    return {};
}
const v15 = { construct: f10 };
function f17() {
    return side_effect_array;
}
const v18 = new Proxy(f17, v15);
for (let i20 = 0; i20 < 25000; ++i20) {
    f0(side_effect_array, v18);
}
v9 = true;
f0(side_effect_array, v18);
