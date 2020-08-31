Vue.component('hello-bold',{
    template: 
            `
              <div>
                <b>hello</b><br>
                <i>hello</i>
              </div>
            `
})

Vue.component('button-counter',{
    data: function (){
        return { 
            count:0
         }
    },
    template: `<button @click="count++">Ditekan sebanyak {{count}} kali<button>`
})

Vue.component('blog-post',{
    props: ['postprops'],
    template: 
            `
            <div>
                <h3>{{postprops.title}}</h3>
                <div v-html="postprops.content"></div>
            </div>
            `
})

var app = new Vue({
    el:'#app',
    data:{
        posts: [
            {id: 1, title: "program", content: "lorem ipsum"},
            {id: 2, title: "program", content: "lorem ipsum"},
            {id: 3, title: "program", content: "lorem ipsum"}
        ]
    }
})