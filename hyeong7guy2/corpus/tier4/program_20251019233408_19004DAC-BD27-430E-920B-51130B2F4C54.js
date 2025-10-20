const v1 = new WeakSet();
v1.add(v1);
try {
    throw v1;
} catch(e3) {
    e3.b = e3;
}
