import axios from "axios";
import getData from "./getData";
import errorData from "./errorService";

export default function updateData(context, params) {
    const token = sessionStorage.getItem("arxtkn");
    const parametri = params;
    const opzioni = {
        method: 'post',
        headers: {
            'arxtkn': token
        },
        data : parametri,
        url: SERVICE_URL + 'JsonFromAS/EseguiOperazioneSvr'
    };
    axios (opzioni, context)
        .then( (response) => {
            context.closeModal();
            const params = {service: "ProdottiPerScortaSS", famiglia: context.famigliaattiva};
            getData(context, params);
        })
        .catch( (response) => {
            errorData(error, context);
        });
}
