export const api1 = async() => {
    await new Promise((resolve) => {setTimeout(resolve, 3000)})
    return "Hello Suspense"
}