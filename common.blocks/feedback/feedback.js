modules.define('feedback', ['i-bem-dom', 'button', 'radio-group'], 
    function(provide, bemDom, Button, RadioGroup) {

    const Feedback = bemDom.declBlock('feedback', {
        onSetMod: {
            js: {
                inited() {
                    this._modal = this.findChildBlock(Modal);
                }
            }
        },

        _onClick: function() {
            this.toggleMod('disabled');
        }, 

        _submitForm(event) {
            
        },

        _closeQuiz(event) {
        }
    }, {
        lazyInit: true,

        onInit : function() {
            this._domEvents('form-submit').on('submit', this.prototype._submitForm);
            this._domEvents('form-close').on('click', this.prototype._onClick);
            }
        });

    provide(Feedback);

});


// modules.define('box', ['i-bem-dom'], function(provide, bemDom) {

//     provide(bemDom.declBlock('box', {
//         _onClick: function() {
//             this.toggleMod('closed', 'yes');
//         }
//     }, {
//         lazyInit: true,

//         onInit : function() {
//             this._domEvents().on('click', this.prototype._onClick);
//         }
//     }));

// });
