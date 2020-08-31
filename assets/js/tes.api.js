var app  = new Vue({ 
    el: '#app',
    data(){
        return { 
            info:'',
            errored:null,
            error:'',
            firstname : '',
            lastname  : '',
            password  : '',
            email     : '',
            token     : '',
            email_sign:'',
            password_sign:'',
            title:'',
            description:'',
            published:true
         }
    },
    mounted (){
        
    },
    methods: {
        signup:function(){
            axios.post('http://localhost:8080/api/users/signup',{
                firstname : this.firstname,
                lastname  : this.lastname,
                password  : this.password,
                email     : this.email
            }).then(response => {
                this.info = response.data.id
            }).catch(error=>{
                this.error = error
                this.erroed= true
            })
        },
        signin:function (){
            axios.post('http://localhost:8080/api/users/signin',{
                password  : this.password_sign,
                email     : this.email_sign
            }).then(response => {
                this.token = response.data.results.token
            }).catch(error=>{
                this.error = error
                this.erroed= true
            })
        },
        postData:function (){
            axios.post({
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTk4ODYxODQ3LCJleHAiOjE2MDE0NTM4NDd9.Va_Ub3VPiuZ_1dKS3FWPr0gBhJRAykqbwZte85AY9Zo'
            },
            'http://localhost:8080/api/posts',
            {
                title: this.title,
                description: this.description,
                photo: "-",
                published: this.published
            }).then(response => {
                this.token = response.data.results.token
            }).catch(error=>{
                this.error = error
                this.erroed= true
            })
        }
    }
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTk4ODYxODQ3LCJleHAiOjE2MDE0NTM4NDd9.Va_Ub3VPiuZ_1dKS3FWPr0gBhJRAykqbwZte85AY9Zo
 })