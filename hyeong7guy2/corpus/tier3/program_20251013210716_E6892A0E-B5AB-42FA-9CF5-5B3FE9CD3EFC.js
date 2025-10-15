function f0(a1, a2) {
    a1.push(a2);
    new Array(1);
}
for (let i8 = 0; i8 < 20000; ++i8) {
    let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    a.length = 16;
    f0(a, 17);
}
let trigger_array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
trigger_array.length = 16;
const v59 = {
    get p() {
        new Array(262144);
        return 1.1;
    },
};
const provider = v59;
f0(trigger_array, provider.p);
