import axios from "axios";
import getData from "./getData";
import errorData from "./errorService";

export default function updateDataRaggruppamento(context, params) {
    const token = sessionStorage.getItem("arxtkn");
    const parametri = {"codArticolo" : params.oggettoRaggruppamentoGD.codArticolo, "codRaggGD": params.oggettoRaggruppamentoGD.codRaggGD};
    const opzioni = {
        method: 'post',
        headers: {
            'arxtkn': token
        },
        data : parametri,
        url: SERVICE_URL + 'JsonFromAS/rest/RaggruppamentoGD/update'
    };
    axios (opzioni, context)
        .then( (response) => {
            console.log(response.data);
            const params = {service: "ProdottiPerScortaSS", famiglia: context.state.namelista};
            getData(context, params);
            context.closeModal();
        })
        .catch( (error, response) => {
            errorData(error, context);
        });
}
