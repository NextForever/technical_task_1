async function fetchAllData() {
    const _url = 'http://localhost:3001/data'
    return await (await fetch(_url)).json()
}

async function fetchData(postLimit) {
    const limit = `_limit=${postLimit}`
    const _url = 'http://localhost:3001/data?' + limit
    return await (await fetch(_url)).json()
}

async function filterFetchData(arr) {
    let _url
    if (arr.length === 1) {
        _url = `http://localhost:3001/data?application=${arr[0]}`
    } else {
        const params = arr.map(item => `application=${item}`).join('&')
        _url = `http://localhost:3001/data?${params}`
    }

    return await (await fetch(_url)).json()
}

export { fetchData, filterFetchData, fetchAllData }
