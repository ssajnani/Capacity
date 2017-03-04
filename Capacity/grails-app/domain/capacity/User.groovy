package capacity

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

/*User Class

Developed by spring to define a user
 */


@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable {

	//Attribute Declarations
	private static final long serialVersionUID = 1
	transient springSecurityService
	String username
	String password
	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

	//Constructor: Used to create a user
	User(String username, String password) {
		this()
		this.username = username
		this.password = password
	}

	//Gets the authorities held by the user by finding it's link to a role in a UserRole Object
	Set<Role> getAuthorities() {
		UserRole.findAllByUser(this)*.role
	}

	//Used to encode a user password before inserting it
	def beforeInsert() {
		encodePassword()
	}

	//Used to encode a user password before it is updated
	def beforeUpdate() {
		if (isDirty('password')) {
			encodePassword()
		}
	}

	//Methode for encoding the password using springs services
	protected void encodePassword() {
		password = springSecurityService?.passwordEncoder ? springSecurityService.encodePassword(password) : password
	}

	static transients = ['springSecurityService']

	static constraints = {
		username blank: false, unique: true
		password blank: false
	}

	static hasMany =[messages:Message]
	static hasOne = [role: UserRole]

	static mapping = {
		password column: '`password`'
	}
}
