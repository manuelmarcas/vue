new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            
            this.monsterHealth -= this.calculateDamage(3, 10);
            if(this.checkWin()){
                return;
            }

            this.playerHealth -= this.calculateDamage(3, 10);
            if(this.checkWin()){
                return;
            }
            
        },
        specialAttack: function() {
            
        },
        heal: function() {
            
        },
        giveUp: function() {
            
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) +1, min);
        },
        checkWin: function() {
            if(this.monsterHealth <= 0){
                if(confirm('You WON! New Game?')){
                    this.startGame();
                }else{
                    gameIsRunning = false;
                }
                return;
            }else if(this.playerHealth <= 0){
                if(confirm('You LOST! New Game?')){
                    this.startGame();
                }else{
                    gameIsRunning = false;
                }
                return;
            }
            return false;
        }
    }



});