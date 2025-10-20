function f1() {
    const v3 = ("🙌🏿").fontsize();
    const v4 = v3.repeat(2.0);
    const v5 = v3.split();
    let v6;
    try { v6 = v5.reduceRight(v4); } catch (e) {}
    return v6;
}
({ construct: f1 }).construct();
