({
    mustDeps: 'i-bem-dom',
    shouldDeps: [
        { mods: { disabled: true } },
        {
            block: 'button',
            mods: { theme: 'islands', size: 'm', view: 'action' }
        },
        {
            block: 'modal',
            mods: { theme: 'islands', autoclosable: true, 'has-close': true }
        },
        {
            block: 'feedback'
        }
    ]
})
