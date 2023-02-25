async function fetchData(postLimit) {
    const limit = `_limit=${postLimit}`
    const _url = 'http://localhost:3001/data?' + limit
    return await (await fetch(_url, { cache: 'no-cache' })).json()
}

async function filterFetchData(application) {
    // let filters = []
    // filters.push(application)

    const _url = 'http://localhost:3001/data?application=' + application
    return await (await fetch(_url)).json()
}

export { fetchData, filterFetchData }
