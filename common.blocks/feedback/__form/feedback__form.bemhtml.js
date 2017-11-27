block('feedback').elem('form')(
    js()(true),
    tag()('form'),
	content()(function() {
	    return [
	        {
	            elem: 'header'
	        },
	        {
	        	elem: 'body'
	        },
	       	{
	            block: 'button',
	            mods: {
	            	type: 'submit',
	                theme: 'islands',
	                size: 'l',
	                view: 'action'
	            },
	            mix: { block: 'feedback', elem: 'form-submit' },
	            text: 'Submit'
	        },
	        {
	            block: 'button',
	            mods: {
	                theme: 'islands',
	                size: 'l'
	            },
	            mix: { block: 'feedback', elem: 'form-close' },
	            text: 'Close'
	        }
	    ]
	})
);
