import axios from 'axios';
import errorData from "./errorService";
import qs from "qs";

export default function login(username, password, history, savemenu, context) {
    const parametri = {j_user: username, j_pwd: password};
    const opzioni = {
        method: 'post',
        headers: parametri,
        url: SERVICE_URL + 'JsonFromAS/ADLogin'
    };
    const parametri2 = {j_user: username, j_pwd: password};
    const opzioni2 = {
        method: 'get',
        params: parametri2,
        url: SERVICE_URL + 'XMLFromAS/ADLogin'
    };
    axios(opzioni, this)
        .then((response) => {
            console.log(response.data.arxmenu);
            if (response.data.arxtkn != "") {
                console.log("Login successfull");
//                    localStorage.setItem('token', 'token');
                sessionStorage.setItem('arxtkn', response.data.arxtkn);
                if(response.data.username === undefined){
                    sessionStorage.setItem('user_active', 'emanuela.rizzi');
                } else {
                    sessionStorage.setItem('user_active', response.data.username);
                }

                history.push(
                    '/maincontainer',
                    {arxmenu: response.data.arxmenu}
                );
                context.setState({ redirectToReferrer: true });
                savemenu(response.data.arxmenu);
                // quando la sessione scade/quando si chiude il browser, il token viene cancellato
            } else {
                console.log("Username/password does not exists");
            }
        })
        .catch(error => {
            errorData(error, context, history);
        })
    axios(opzioni2, this)
        .then((response) => {
            console.log(response.data.arxmenu);
            if (response.data.arxtkn != "") {
                console.log("Login successfull");
                // quando la sessione scade/quando si chiude il browser, il token viene cancellato
            } else {
                console.log("Username/password does not exists");
            }
        })
        .catch(error => {
            errorData(error, context, history);
        })
}