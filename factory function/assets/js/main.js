function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
        },

        clearDisplay() {
            this.display.value = '';
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.makeAccount();
                }
            });
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        makeAccount() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida')
                return;
            }
        },

        cliqueBotoes() {
            // this = calculadora
            document.addEventListener('click', /*function(e)*/ e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                    //this = document
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.makeAccount();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    }
}

const calculadora = criaCalculadora();

calculadora.inicia();