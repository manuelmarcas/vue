//DECLARAR COMPONENTE GLOBALMENTE

Vue.component('globalmente', {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
});

//DECLARAR COMPONENTE LOCALMENTE
var cmp = {
    data: function() {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function() {
            this.status = 'Normal';
        }
    }
};

new Vue({
    el: '#app1'
});

new Vue({
    el: '#app2',
    components: {
        'localmente': cmp
    }
    
});



//DECLARAR COMPONENTE LOCALMENTE
  