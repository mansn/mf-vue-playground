console.log("[Nuxt Host] Loading remote module...");

// @ts-expect-error: Loaded at runtime via Module Federation
await import("remoteApp/HelloRemote");

console.log("[Nuxt Host] Remote loaded!");

// ✅ Use Nuxt’s internal alias instead of local './entry'

// @ts-expect-error: Nuxt generates this at build time
const entry = await import("#build/entry");
export default entry.default;
