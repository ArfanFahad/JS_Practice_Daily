import fastify from "fastify";

const app = fastify();

function getBasic() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Fahad" }), 500),
  );
}

function getLocation() {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Location failed")), 700),
  );
}

function getPreferences() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ tutorGender: "Male" }), 300),
  );
}

function getChildren() {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ name: "Child 1" }]), 400),
  );
}

app.get("/profile", async () => {
  const results = await Promise.allSettled([
    getBasic(),
    getLocation(),
    getPreferences(),
    getChildren(),
  ]);

  const unwrap = (r) =>
    r.status === "fulfilled"
      ? { data: r.value, error: null }
      : { data: null, error: r.reason.message };

  return {
    basicInfo: unwrap(results[0]),
    location: unwrap(results[1]),
    preferences: unwrap(results[2]),
    children: unwrap(results[3]),
  };
});

app.listen({ port: 4000 }, (err, address) => {
  if (err) throw err;
  console.log("Server running at", address);
});

export default app;
