const v2 = new Int16Array(3231);
const v4 = class extends Float64Array {
}
try { v4.apply(3231, v2); } catch (e) {}
try { Reflect.set(); } catch (e) {}
