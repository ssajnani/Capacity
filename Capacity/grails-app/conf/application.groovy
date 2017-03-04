
//Routes for controllers that are permitted by any user
grails.plugin.springsecurity.controllerAnnotations.staticRules = [
        [pattern: '/assets/**',      access: ['permitAll']],
        [pattern: '/api/**',      access: ['permitAll']],
        [pattern: '/**/js/**',       access: ['permitAll']],
        [pattern: '/**/css/**',      access: ['permitAll']],
        [pattern: '/**/images/**',   access: ['permitAll']],
        [pattern: '/**/favicon.ico', access: ['permitAll']]
]
