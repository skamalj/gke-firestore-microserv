/**
 * http://usejsdoc.org/
 */
const admin = require('firebase-admin');

const serviceAccount = process.env.FIRESTORE_JSON_PATH

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


var getUsers = function(cb) {
	var db = admin.firestore();
	var user_query = db.collection('users');
	user_query.get().then(cb);
};

module.exports = {
		getUsers: getUsers
}