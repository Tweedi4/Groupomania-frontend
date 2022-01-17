export default {
    signup(valeurEmail,valeurPseudo,valeurPassword){
        return axios.post(`${baseUrl}/signup`,
        {email:valeurEmail,pseudo:valeurPseudo,password:valeurPassword}
        );
    },

    login(valeurEmail,valeurPassword){
        return axios.post(`${baseUrl}/login`,
        {email:valeurEmail,password:valeurPassword}
        );
    },
}
