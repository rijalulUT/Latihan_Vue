var app = new Vue({
    el: '#app',
    data(){
        return {
            message: 'Hello Vue!',
            toggle : true,
            loading: true,
            id_custom:"test",
            name:"",
            satu:0,
            dua:0,
            hasil:0
        }
      
    },
    methods: {
        hello(){
            this.toggle  = !this.toggle
            this.message = this.toggle ? "hello" : "enggak hello"
            this.toggle ? alert("hello") : alert("enggak hello")
            this.id_custom = "click"
        },
        onSubmit(){
            this.name
            this.satu 
            this.dua
            this.hasil = this.satu + this.dua
        }
    },
    created(){
            setTimeout(()=>{
               this.loading = false
               this.message = "sudah diubah dalam 5 detik"
               this.id_custom = "ready"
            },5000)
    }
  })