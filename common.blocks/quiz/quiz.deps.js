({
    shouldDeps: [
    	'i-bem-dom',
        { elems: 'content' },
        {
            block: 'button',
            mods: { theme: 'islands', size: 'm' }
        },
        {
        	block: 'modal',
        	mods: { theme: 'islands', autoclosable: true }
        },
        {
            block: 'quiz',
            mods: { disabled: true }
        }
    ]
})
