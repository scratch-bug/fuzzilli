const v1 = {};
v1.toString = Symbol;
v1.toString().toString(v1);
