var app  = new Vue({  
    el: '#app',
    data: {
        message:'',
    },
    methods: {
       escKey: function (){
            this.message = 'Anda menekan tombol esc'
       },
       spaceKey: function (){
            this.message = 'Anda menekan tombol Space'
       },
       upKey: function (){
            this.message = 'Anda menekan tombol up'
       },
       downKey: function (){
            this.message = 'Anda menekan tombol down'
       },
       aKey: function (){
        this.message = 'Anda menekan tombol a'
       }
    }
})