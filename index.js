export default {
  async fetch(request, env, ctx) {
    return new Response("V2Ray Worker is running!", {
      headers: { "content-type": "text/plain" }
    });
  }
}
