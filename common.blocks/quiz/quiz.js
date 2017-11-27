modules.define('quiz', ['i-bem-dom', 'button', 'modal'], 
    function(provide, bemDom, Button, Modal) {

    const Quiz = bemDom.declBlock('quiz', {
        onSetMod: {
            js: {
                inited() {
                    this._modal = this.findChildBlock(Modal);
                }
            }
        },

        _onClick: function() {
            this.toggleMod('disabled');
            console.log('tyt');
        }, 

        _openModal(event) {
            this._modal.setMod('visible', true);
        },

        _closeQuiz(event) {
        }
    }, {
        lazyInit: true,

        onInit : function() {
            this._domEvents('accept').on('click', this.prototype._openModal);
            this._domEvents('decline').on('click', this.prototype._onClick);
            }
        });

    provide(Quiz);

});