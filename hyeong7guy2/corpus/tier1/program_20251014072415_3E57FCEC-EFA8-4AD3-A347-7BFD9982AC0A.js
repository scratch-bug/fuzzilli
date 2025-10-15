const v1 = -9223372036854775807 >>> -9223372036854775807;
try {
    Uint8Array.fromBase64("symbol", { lastChunkHandling: v1 });
} catch(e6) {
}
