import axios from "axios";

export function AbstractApi(props) {
    let newUrl = null;

    if (props.urlExtension !== undefined && props.urlExtension !== null) {
        newUrl = `${props.url}?`;
        for (var i = 0; i < Object.keys(props.urlExtension).length; i++) {
            newUrl = `${newUrl}${i !== 0 ? "&" : ""}${Object.keys(props.urlExtension)[i]
                }=${props.urlExtension[Object.keys(props.urlExtension)[i]]}`;
        }
    }

    return axios[props.apiMethod](
        newUrl !== null ? newUrl : props.url,
        props.apiMethod === "delete" && props.data
            ? { headers: props.headers ? props.headers : {}, data: props.data }
            : props.data && props.data,
        props.apiMethod !== "delete" && props.headers && { headers: props.headers }
    );
}