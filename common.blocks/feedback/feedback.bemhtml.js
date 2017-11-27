block('feedback')(
    js()(true),
    content()(function() {
        return {
            block: 'form',
            content: [
                {
                    block: 'feedback',
                    elem: 'header',
                    content: this.ctx.title
                },
                {
                    block: 'feedback',
                    elem: 'questions',
                    content: this.ctx.questions.map(function(question) {
                        question.block = 'feedback';
                        question.elem = 'question';

                        return question;
                    })
                },
                {
                    block: 'button',
                    mods: {
                        type: 'submit',
                        theme: 'islands',
                        size: 'l',
                        view: 'action'
                    },
                    mix: { block: 'feedback', elem: 'submit' },
                    text: 'Submit'
                }
            ]
        };
    }),
    elem('header').tag()('h2'),
    elem('form')(
        js()(true),
        tag()('form')
    ),
    elem('question').content()(function() {
        return [
            {
                elem: 'text',
                content: this.ctx.text
            },
            {
                block: 'radio-group',
                mods: {
                    theme: 'islands',
                    size: 'm',
                    type: 'line'
                },
                mix: { block: 'feedback', elem: 'radio-group'},
                name: this.ctx.name,
                options: this.ctx.options
            }
        ];
    })
);
