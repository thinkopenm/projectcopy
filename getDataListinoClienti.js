import axios from "axios";
import getData from "./getData";
import errorData from "./errorService";

export default function getDataListinoClienti(context, params, service) {
    const token = sessionStorage.getItem("arxtkn");
    const parametri = {"cliente": params.cliente, "dataValidita1": params.data1, "dataValidita2": params.data2, "listino": params.listino}
    const opzioni = {
        method: 'post',
        headers: {
            'arxtkn': token
        },
        data : params,
        url: SERVICE_URL + 'JsonFromAS/rest/ListinoClientiRst/' + service
    };
    axios (opzioni, context)
        .then( (response) => {
            console.log(response.data);
            const exportfile = SERVICE_URL + 'JsonFromAS/' + response.data.message;
            window.open(exportfile);
        })
        .catch( (error, response) => {
            errorData(error, context);
            alert("Errore, riprova");
        });
}
