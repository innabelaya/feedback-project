modules.define('quiz', ['i-bem-dom', 'modal'], function(provide, bemDom, Modal) {

    const Quiz = bemDom.declBlock('quiz', {
        onSetMod: {
            js: {
                inited() {
                    this._modal = this.findChildBlock(Modal);
                }
            }
        },

        _onDecline: function() {
            bemDom.destruct(this.domElem);
        },

        _onAccept(event) {
            this._modal.setMod('visible');
        }
    }, {
        lazyInit: true,

        onInit : function() {
            this._events('accept').on('click', this.prototype._onAccept);
            this._events('decline').on('click', this.prototype._onDecline);
            }
        });

    provide(Quiz);

});

modules.define('quiz__accept', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    // function declElem(blockName, elemName, props, staticProps) {
    // }

    const QuizAccept = bemDom.declElem('quiz', 'accept', {
        _onClick() {
            this._emit('click');
        }
    }, {
        lazyInit: true,

        onInit : function() {
            this._events(Button).on('click', this.prototype._onClick);
            }
        });

    provide(QuizAccept);

});

modules.define('quiz__decline', ['i-bem-dom', 'button'], function(provide, bemDom, Button) {

    const QuizDecline = bemDom.declElem('quiz', 'decline', {
        _onClick() {
            this._emit('click');
        }
    }, {
        lazyInit: true,

        onInit : function() {
            this._events(Button).on('click', this.prototype._onClick);
            }
        });

    provide(QuizDecline);

});

