
const App = {
    data() {
       return { 
       myname : '<h1>Baijuman Ali</h1>', 
       myunic :'<h2>Suleyman Demirel University</h2>',
       someinfo : '<p>Three things in human life are important: the first is to be kind; the second is to be kind; and the third is to be kind.</p>',
       placeholderS : 'write your name... ',
       placeholderW : 'write your email...',
       notes : [],
       inputvalue1 : '',
       inputvalue2 : ''
       

        
         
                
}
 } ,methods: {
      
    AddNewUsers(){
        if(this.inputvalue1 !== ""){
            this.notes.push(this.inputvalue1)
               this.inputvalue1 = ""
              
              }
        if(this.inputvalue2!== ""){
          this.notes.push(this.inputvalue2)
             this.inputvalue2 = "" 
      }
      console.log(this.notes)
       
    } 
    
},watch:{
  inputvalue1(value){
    if(value.length > 25) {
      alert("Your input must not  more than 25 character")
        this.inputvalue1= '';
        
    }


},
inputvalue2(value){
  if(value.length > 25) {
    alert("Your input must not  more than 25 character")
      this.inputvalue2 = '';
  }


}
}
 }

    
  
 const app = Vue.createApp(App)
 app.mount('#app');