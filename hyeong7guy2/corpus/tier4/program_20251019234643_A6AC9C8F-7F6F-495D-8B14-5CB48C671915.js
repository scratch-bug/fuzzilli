const v4 = Reflect.construct(SuppressedError, Object, Uint16Array);
try { v4.toLocaleString(Reflect, Object); } catch (e) {}
