block('feedback').elem('body')(
    js()(true),
    tag()('form'),
	content()(function() {
    return [
        {
            block: 'q1',
            content: [
            	{ 
            		elem: 'text',
            		content: 'Мы обновивли эту страницу' 
            	},
            	{ 
            		block: 'radio-group',
		            mods: {
		                theme: 'islands',
		                size: 'm',
		                type: 'line'
		            },
		            mix: { block: 'feedback', elem: 'radio-group'},
		            name: 'q1',
				    val: 1,
				    options: [
				        {
				            val: 1,
				            text: 'стало лучше'
				        },
				        {
				            val: 2,
				            text: 'стало хуже'
				        },
				        {
				            val: 3,
				            text: 'не вижу разницы'
				        }
		        	]
		        } 
            ]
        },
        {
            block: 'q2',
            content: [
            	{ 
            		elem: 'text',
            		content: 'Мы обновивли эту страницу' 
            	},
            	{ 
            		block: 'radio-group',
		            mods: {
		                theme: 'islands',
		                size: 'm',
		                type: 'line'
		            },
		            mix: { block: 'feedback', elem: 'radio-group'},
		            name: 'q2',
				    val: 1,
				    options: [
				        {
				            val: 1,
				            text: 'стало лучше'
				        },
				        {
				            val: 2,
				            text: 'стало хуже'
				        },
				        {
				            val: 3,
				            text: 'не вижу разницы'
				        }
		        	]
		        } 
            ]
        },
    ]
})
)
