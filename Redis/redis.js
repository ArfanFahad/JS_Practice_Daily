import { createClient } from "redis";

async function run() {
  const client = createClient();

  client.on("error", (err) => {
    console.error("Redis client error", err);
  });

  await client.connect();

  const allProduct = [
    {
      id: 1,
      name: "Sound Box",
      price: "120 Taka",
    },
    {
      id: 2,
      name: "RGB Light",
      price: "2000 Taka",
    },
  ];

  for (const product of allProduct) {
    await client.set(`product:${product.id}`, JSON.stringify(product));
  }

  const keys = allProduct.map((p) => {
    return `product: ${p.id}`;
  });

  console.log(keys);

  await client.quit();
}

run();
