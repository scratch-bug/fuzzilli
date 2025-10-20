for (const v1 in this) {
    const v3 = eval(v1);
    try { v3(v1); } catch (e) {}
}
