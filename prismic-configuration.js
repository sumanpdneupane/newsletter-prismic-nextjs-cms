import Prismic from "prismic-javascript";

export const apiEndPoint = "https://samplenewletter.cdn.prismic.io/api/v2";

export const aaccessToken = "";

//Creating prismic client object
export const Client = (req = null) => {
    const createClientOptions = (req = null, prismicAccessToken = null) => {
        const reqOption = req ? {req} : {};
        const accessTokenOption = prismicAccessToken ? {accessToken: prismicAccessToken} : {};
        return {
            ...reqOption,
            ...accessTokenOption,
        }
    }

    return Prismic.client(apiEndPoint, createClientOptions(req, aaccessToken))
}