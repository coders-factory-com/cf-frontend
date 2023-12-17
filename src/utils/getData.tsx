//server side

export default async function getData(url: string) {
  try {
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Error  ${url}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
