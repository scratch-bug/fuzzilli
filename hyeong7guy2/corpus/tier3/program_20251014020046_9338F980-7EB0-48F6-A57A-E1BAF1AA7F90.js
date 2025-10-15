for (let v0 = 0; v0 < 50; v0++) {
    const v1 = class {
    }
    try { v1(); } catch (e) {}
    try { v1(); } catch (e) {}
    try { v1.constructor(); } catch (e) {}
    try { new Symbol(); } catch (e) {}
    const v8 = eval();
    v8 ?? v8;
}
