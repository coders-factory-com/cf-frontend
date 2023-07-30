//server side

export default async function getData(url: string) {
    return await (await fetch(url, { cache: "no-store" })).json()
}
