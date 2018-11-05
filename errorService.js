export default function errorData(error, context, history) {
    if(error.response === undefined){
        context.setState({
            loginerror: true,
            errormessage: 'Internal server error'
        })
        return false;
    }
    switch(error.response.status) {
        case 401:
            context.setState({
                loginerror: true,
                errormessage: 'Utente o password errati'
            })
            context.props.history.push('/login',
                {
                    tokendeprecated: true
                }
            );
            break;
        case 500:
            context.setState({
                loginerror: true,
                errormessage: 'Internal server error'
            })
            break;
        default:
            context.setState({
                loginerror: true,
                errormessage: 'Internal server error'
            })
    }
}
