function Calculadora() {

        const display = document.querySelector('.display');

        this.inicia = function() {
            this.cliqueBotoes();
            this.pressionaEnter();
        };

        this.pressionaEnter = function(){
            display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        };

        this.clearDisplay = function(){
            display.value = '';
        };

        this.apagaUm = function(){
            display.value = display.value.slice(0, -1);
        };

        this.realizaConta = function(){
            let conta = display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                display.value = String(conta);
            } catch(e){
                alert('Conta inválida');
                return;
            }
        };

        this.cliqueBotoes = function(){
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        };

        this.btnParaDisplay = function(valor){
            display.value += valor;
        };
}

const calculadora = new Calculadora();
calculadora.inicia();