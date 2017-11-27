block('quiz').elem('content').content()(function() {
    return [
        {
            elem: 'text'
        },
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'l',
                view: 'action'
            },
            mix: { block: 'quiz', elem: 'accept' },
            text: 'Accept'
        },
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'l'
            },
            mix: { block: 'quiz', elem: 'decline' },
            text: 'Decline'
        },
        {
        	block: 'modal',
        	mods: { theme: 'islands', autoclosable: true },
        	content: { block: 'feedback' }
        }
    ]
});
