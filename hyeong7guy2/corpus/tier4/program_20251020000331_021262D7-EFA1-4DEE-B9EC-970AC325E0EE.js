const v1 = Intl.Locale;
const v2 = v1.prototype;
try { v2.maximize(v1, v1, Intl); } catch (e) {}
const v4 = v2.constructor;
try { new v4(v2); } catch (e) {}
