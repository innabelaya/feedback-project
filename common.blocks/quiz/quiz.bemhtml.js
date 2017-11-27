block('quiz')(js()(true));
block('quiz').content()(function() {
        return {
            elem: 'content',
            content: this.ctx.content
		};
  	}
)