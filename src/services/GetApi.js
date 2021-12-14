/* eslint-disable react-hooks/exhaustive-deps */

const GetApi = async (url) => {


    let data = []
    let error = null

    try {

        const req = await fetch(url)
        const dataFetch = await req.json()
        data = dataFetch


        return [
            data,
            error
        ]

    } catch (err) {
        error = err
    }


}

export {
    GetApi
}