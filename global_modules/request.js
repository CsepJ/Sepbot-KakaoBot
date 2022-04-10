importClass(org.jsoup.Jsoup);
const { clientKey, masterKey } = require("config");
const spgRequest = {
    requestFunc: (funcName, params) => {
        let result = Jsoup.connect("https://sepcod.com/function")
        .header("client-key", clientKey)
        .data("function", funcName)
        .data("data", JSON.stringify(params))
        .ignoreContentType(true)
        .post();
        return JSON.parse(result.text());
    },
    requestQuery: (sqlQuery) => {
        let result = Jsoup.connect("https://sepcod.com/query")
        .header("master-key", masterKey)
        .data("query", sqlQuery)
        .ignoreContentType(true)
        .post();
        return JSON.parse(result.text());
    }
}
module.exports = spgRequest;