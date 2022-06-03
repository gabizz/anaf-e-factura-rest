// https://webserviceapl.anaf.ro/prod/FCTEL/rest/listaMesajeFactura?zile=60&cif=34612616

const API = " https://webserviceapl.anaf.ro/prod/FCTEL/rest/listaMesajeFactura"

const fetchData = async({cif,zile}) => {
    let result;
    try {
        result = await fetch(
            `${API}?zile=${zile}&cif=${cif}`, 
            {
                mode: "no-cors",
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS'}
            },

        )
        result = await result.json()
    } catch (error) {
        res = {err: true, msg: "erorar: "+ error}
    } finally {
        return result
    }
}