import axios from "axios";
import qs from "qs";
import errorData from "./errorService";

export default function getData(context, params) {
    const token = sessionStorage.getItem("arxtkn");
    const parametri = params;
    const opzioni = {
        method: 'post',
        headers: {
            'arxtkn': token
        },
        data: qs.stringify(parametri),
        url: SERVICE_URL + 'JsonFromAS/JsonFromAS'
    };
    axios(opzioni, context)
        .then((response) => {
            context.successCallback(params.service, response, params);
        })
        .catch(error => {
            errorData(error, context);
        });
}
