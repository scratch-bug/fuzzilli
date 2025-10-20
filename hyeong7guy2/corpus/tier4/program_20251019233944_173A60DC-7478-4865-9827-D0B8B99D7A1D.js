const v1 = new Uint32Array();
let v2 = 108055911;
with (v1) {
    for (let i = 0; i < 5; i++) {
        ({"byteLength":v2,...v2} = v1);
    }
}
