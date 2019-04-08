new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {

            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true, 
                text: 'Player hits Monster for ' + damage
            });
            

            let state = this.checkWin();
            console.log(state);
            if(true == state){
                console.log('SI');
                return;
            }

            this.monsterAttacks(7, 12);
        },
        specialAttack: function() {

            var damage = this.calculateDamage(7, 15);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true, 
                text: 'Player hits Monster hard for ' + damage
            });
            if(this.checkWin()){
                return;
            }else{
                this.monsterAttacks(10, 20);
            }
 
        },
        heal: function() {

            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else{
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true, 
                text: 'Player heals for 10'
            });
            this.monsterAttacks(7, 12);

        },
        monsterAttacks: function(min, max) {

            var damage = this.calculateDamage(min, max);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false, 
                text: 'Monster hits player for ' + damage
            });

        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) +1, min);
        },
        checkWin: function() {

            if(this.monsterHealth <= 0){
                
                if(confirm('You WON! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }

                console.log('hemos ganado');

                return true;

            }else if(this.playerHealth <= 0){

                if(confirm('You LOST! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }

        
                console.log('hemos perdido');
                return true;
            }
            return false;

        }
    }



});