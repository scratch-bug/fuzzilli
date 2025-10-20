const v1 = class extends Map {
}
const v5 = Reflect.construct(v1, [], BigInt64Array);
try { v5.at(); } catch (e) {}
