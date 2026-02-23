async function callProfile() {
  try {
    const res = await fetch("http://localhost:4000/profile");

    // check HTTP status
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();

    console.log("Response from server:\n", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Request failed:", err.message);
  }
}

callProfile();
