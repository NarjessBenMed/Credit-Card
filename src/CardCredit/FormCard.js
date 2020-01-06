import React, { Component } from 'react'
import  './FormCard.css'
import Card from './Card.js'
export default class FormCard extends Component {
        constructor (props)
        {
          super(props);
          this.state={  numCard:"",
                        UserName:"",
                        ValidThru:"",
                        
                      

          };

        }




// *********************************  les setters *******************************************//



             setNumCard= (event) =>
             {

              const numReg= new RegExp (/^[0-9]*$/)
              if (event.target.value.length <=19) 
              {  
            
               if (!numReg.test(event.target.value))
                {
                // alert ("veuillez verifier le numero de la carte ")
                 event.target.value="";
                
                 this.setState({numCard: ""})
                }
                 else
                 {
      
            
            this.setState({numCard: event.target.value.slice(0, 4).concat(' ',event.target.value.slice(4, 8)).concat(' ',event.target.value.slice(8, 12)).concat(' ',event.target.value.slice(12, 16))})
        
                 }
                }
                 else
                 {


                 event.target.value= this.state.numCard.substr(0, 19)
                 }
             
            }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

             setUserName=(event)=>
             {
               const  regName=new RegExp(/^[a-zA-Z ]+$/)
               if  (   ((event.target.value)).length <=20) 
               if  ( regName.test(event.target.value) && (regName.test(event.target.value.trim()) ))  
               {
               
                this.setState({UserName: event.target.value})
               }



                 else 
                   {
        
                 event.target.value ="";
                this.setState({UserName: ""})
              }
              else 
              event.target.value = this.state.UserName.substr(0, 20);
             }

            
             
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
             
             setValidThru = (event) =>

             {
                  
             if (isNaN(event.target.value.slice(event.target.value.length-1, event.target.value.length)))
             
              {
                event.target.value="";
            
                this.setState({ValidThru: ""})
              }
               else
               {
            
             this.setState({ValidThru: event.target.value})
             if (this.state.ValidThru.length==1)
               {
          
                   event.target.value += "/";
      
        
              if (  (event.target.value) > "13") 
              {
              event.target.value="";
        
              this.setState({ValidThru: ""})
              return; 
        
             }
             else
            
            this.setState({ValidThru: event.target.value})  
             
       
               }
              }
           
          }

    render() {

        return (

            <div className="CardForm">
            <Card user={this} />
     
              <form  className="FormCard"    name="credit" method="Post">
                  <input type="text" name="numCard" onChange={this.setNumCard}  />
                  <input type="text" name="nameUser" onChange={this.setUserName}   />
                  <input type="text" name="dateThru" onChange={this.setValidThru} placeholder="MM/YY" maxLength="5"/>

              </form>
      
    

      </div>


        )
    }
}
