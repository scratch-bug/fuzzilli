const v1 = [2.4108082532991067e+307];
const v2 = {};
v2.has = 3;
const v4 = new Proxy(v1, v2);
try { v4.indexOf(); } catch (e) {}
