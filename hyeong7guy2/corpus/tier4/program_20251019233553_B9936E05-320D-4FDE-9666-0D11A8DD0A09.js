class C1 extends Uint16Array {
}
with (d8) {
    const v4 = test.FastCAPI;
    const v5 = v4 != C1;
    const v6 = new v4();
    v6.clamp_compare_i32(v5);
}
