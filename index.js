addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response("V2Ray Worker is running!", {
    headers: { "content-type": "text/plain" },
  });
}
