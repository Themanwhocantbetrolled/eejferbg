
const App = {
    data() {
       return { 
        hobbies : ['Football' , 'travel' , 'coding','listen music'],
        youtubeblog : ['Qewbite', 'Vova' ,'Ptuxermann'],
        wherestydu : ['Taldykorgan Gymnasium № 27','Innoverse Taldykorgan','Suleyman Demirel University'],
        quality :[' Interpersonal ','Teamwork ' ,'Attention details'],
        links :['https://www.youtube.com/c/TheSkittleSLive','https://www.youtube.com/c/VovaRomanchenko','https://www.youtube.com/channel/UC52i2gUEbw8G9mWJYQ2lWLw']
      
       

        
         
                
}
 },
 methods :{
       Links(i){
              this.links[i];
       }
 },
  
 
 }

    
  
 const app = Vue.createApp(App)
 app.mount('#app');