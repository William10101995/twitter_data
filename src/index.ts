import twit from 'twit'
import configTwit from './config/configTwit'

//Instancio twit
const twitter = new twit(configTwit)

//Verifico las credentiales
twitter.get('account/verify_credentials', {
	include_entities: true,
	skip_status: true,
	include_email: false

}, (err, data, response) => {
	console.log(response, data)
})

export default twitter
