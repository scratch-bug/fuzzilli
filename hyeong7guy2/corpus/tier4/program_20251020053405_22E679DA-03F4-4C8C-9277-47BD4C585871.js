for (const v1 in this) {
    const v3 = eval(v1);
    v3.prototype = v3;
    try { v3(v1); } catch (e) {}
}
