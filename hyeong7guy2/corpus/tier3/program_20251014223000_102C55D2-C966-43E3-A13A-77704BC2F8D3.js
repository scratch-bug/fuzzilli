function f0() {
    ("function").localeCompare("function");
    new Worker(f0, { type: "function" });
    return f0;
}
f0();
f0();
