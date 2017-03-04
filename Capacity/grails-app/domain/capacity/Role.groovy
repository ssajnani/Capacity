package capacity

import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString

/*Role Class

Developed by spring to define roles by a user and authority for different controllers
 */

@EqualsAndHashCode(includes='authority')
@ToString(includes='authority', includeNames=true, includePackage=false)
class Role implements Serializable {

	//Attribute Declarations
	private static final long serialVersionUID = 1

	String authority

	//Defines the authority level of the role
	Role(String authority) {
		this()
		this.authority = authority
	}

	static constraints = {
		authority blank: false, unique: true
	}

	static mapping = {
		cache true
	}
}
