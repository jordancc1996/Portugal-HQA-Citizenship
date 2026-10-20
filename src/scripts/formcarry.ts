export async function submitToFormcarry(
  url: string,
  payload: unknown,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean> {
  if (!url) {
    return false;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetchImpl(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "error",
      signal: controller.signal,
    });
    const data = (await response.json()) as { code?: number | string };
    return response.ok && Number(data?.code) === 200;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}
