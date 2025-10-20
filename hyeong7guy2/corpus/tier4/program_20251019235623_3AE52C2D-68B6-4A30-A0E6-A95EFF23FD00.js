function f0(a1, a2, a3) {
    this.postMessage(a2);
    return a1;
}
new Worker(f0, { type: "function" });
-296494875n >> -296494875n;
