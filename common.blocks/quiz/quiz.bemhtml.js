block('quiz')(
    js()(true),
    content()(function() {
        return [
            {
                elem: 'text',
                content: this.ctx.quizText
            },
            {
                block: 'button',
                mods: {
                    theme: 'islands',
                    size: 'l',
                    view: 'action'
                },
                mix: { block: 'quiz', elem: 'accept', js: true },
                text: 'Accept'
            },
            {
                block: 'button',
                mods: {
                    theme: 'islands',
                    size: 'l'
                },
                mix: { block: 'quiz', elem: 'decline', js: true },
                text: 'Decline'
            },
            {
                block: 'modal',
                mods: { theme: 'islands', autoclosable: true, 'has-close': true },
                content: {
                    block: 'feedback',
                    title: this.ctx.title,
                    questions: this.ctx.questions
                }
            }
        ];
    })
);
