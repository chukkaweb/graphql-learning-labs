const RestApiHost = process.env.REST_HOST || 'http://localhost:3000'

export const RestClient = async <T extends object>(
    endpoint: string,
    data?: object,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET'
) => {
    const url = `${RestApiHost}${endpoint[0] === '/' ? endpoint : `/${endpoint}`}`
    console.log('hitting rest api:[' + method + '] ', endpoint)
    const result = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    })
    if (!result.ok) {
        throw new Error(`Error: ${result.status} - ${result.statusText}`)
    }
    const res = result.json() as T
    return res
}
