import Api from '@/services/Api'

/*This AuthentificationService.js is going to export an obs that has a register method*/ 
export default {
    register (credentials) {
        return Api().post('register', credentials)
    }
}
/*Pass email and password to the post method of the Axios module, 
witch is going to do a post request to the register endpoint on 
ower express server and the use those credentials*/


// AuthenticationServices.register({
// email: 'testing@gmail.com',
// password: '123456'
// })