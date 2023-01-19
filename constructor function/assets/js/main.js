function CriaCalculadora() {
    
    this.display = document.querySelector('.display');

    this.inicia = function() {
        this.cliqueBotoes();
        this.pressEnter();
    }

    this.clearDisplay = function() {
        this.display.value = '';
    }

    this.pressEnter = function() {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.makeAccount();
            }
        });
    }

    this.deleteOne = function() {
        this.display.value = this.display.value.slice(0 -1)
    }

    this.makeAccount = function() {
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
    }

    this.cliqueBotoes = function() {
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
    }

    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    }
}

const calculadora = new CriaCalculadora();

calculadora.inicia();