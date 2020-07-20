import React,{Component} from "react";
import Car from "./Car"

class FormulaireContact extends Component{
    state={
        userName:'',
        color:"",
        colors:[" ","green","red","orange","pink","yellow"],
        comment:""
    }
    handlePseudo=(e)=>{
        this.setState({
            userName:e.target.value
        })
       // console.log(e.target.value)
     
    }
    handlecolor=(e)=>{
         
         this.setState({
             color:e.target.value
         })
        // console.log(e.target);
    }
    handlcomment=(e)=>{
    //console.log(e.target.value)
    this.setState({
        comment: e.target.value
    })
    }
    handlubmit=(e)=>{
        e.preventDefault();
        console.log(`Pseudo:${this.state.userName} color:${this.state.color} commentaire:${this.state.comment}`)

    }
 
  render(){
    return(<>
         <Car color={this.state.color} width="400"/>
         <h1>Votre commentaire</h1>
          <form onSubmit={this.handlubmit} >
              <div>
              <label htmlFor="Pseudo">Pseudo</label>
              <input type="text" className="Pseudo" value={this.state.userName} onChange={this.handlePseudo}/> 
              </div>
              <div>
                  <label htmlFor="">colors</label>
                  <select value={this.state.color} onChange={this.handlecolor} >
                      {
                          this.state.colors.map((color,index)=>{
                          return <option key={index} value={color}>{color}</option>
                          })
                      }
                  </select>
              </div>
              <div>
                  <label htmlFor="commentaire">Message</label>
                  <textarea onChange={this.handlcomment} name="commentaire" className="commentaire" placeholder="text...." value={this.state.comment}></textarea>
              </div>
              <button >valider</button>
          
          </form>
        </>
    )
    }
}

export default FormulaireContact;