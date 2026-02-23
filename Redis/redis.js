// file: cacheSimulation.js

import { createClient } from "redis";

// ---------------------------
// 1️⃣ Connect to Redis
// ---------------------------
const redis = createClient();

redis.on("error", (err) => console.log("Redis Error:", err));

await redis.connect();

console.log("✅ Connected to Redis");

// ---------------------------
// 2️⃣ Fake Database Function
// ---------------------------
// Simulates slow DB query
function fakeDatabaseQuery(userId) {
  return new Promise((resolve) => {
    console.log("🐌 Fetching from DATABASE...");

    setTimeout(() => {
      resolve({
        id: userId,
        name: "Fahad",
        role: "Student",
        premium: true,
      });
    }, 2000); // 2 second delay (slow DB)
  });
}

// ---------------------------
// 3️⃣ Cache-First Logic
// ---------------------------
async function getUserProfile(userId) {
  const cacheKey = `user:${userId}`;

  console.log("\n🔍 Checking Redis Cache...");

  // Try Redis first
  const cachedData = await redis.get(cacheKey);

  if (cachedData) {
    console.log("⚡ CACHE HIT → Returning from Redis");
    return JSON.parse(cachedData);
  }

  // Cache miss → Query DB
  console.log("❌ CACHE MISS");

  const user = await fakeDatabaseQuery(userId);

  console.log("💾 Storing in Redis (TTL 10 seconds)");

  await redis.set(
    cacheKey,
    JSON.stringify(user),
    { EX: 10 }, // Expire after 10 seconds
  );

  return user;
}

// ---------------------------
// 4️⃣ Simulation Runner
// ---------------------------
async function runSimulation() {
  console.log("\n====== FIRST REQUEST ======");
  console.time("Request Time");

  const user1 = await getUserProfile(42);
  console.log("👤 User Data:", user1);

  console.timeEnd("Request Time");

  console.log("\n====== SECOND REQUEST ======");
  console.time("Request Time");

  const user2 = await getUserProfile(42);
  console.log("👤 User Data:", user2);

  console.timeEnd("Request Time");

  console.log("\n⏳ Waiting for cache to expire...");
  await new Promise((r) => setTimeout(r, 11000));

  console.log("\n====== THIRD REQUEST (After TTL) ======");
  console.time("Request Time");

  const user3 = await getUserProfile(42);
  console.log("👤 User Data:", user3);

  console.timeEnd("Request Time");
}

// Run it
await runSimulation();

// Close Redis connection
await redis.disconnect();
