import React, { Component } from 'react';
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core';

export default class Form extends Component {
    constructor(){
        super()
            this.state = {
                expenses : 0,
                budget : 0,
                name : '',
                spend : 0,
                totalExpenditures : [],
                totalBudget: 0
            }
        this.handleChange = this.handleChange.bind(this)
        this.totalExpenditure = this.totalExpenditure.bind(this)
    }

    handleChange(evt) {
        const value = evt.target.value;
        this.setState({
          [evt.target.name]: value
        });
      }

      totalExpenditure(){
          let {name , spend , totalExpenditures, budget , expenses} = this.state
          
          this.setState ({
              totalExpenditures : [ ...totalExpenditures, {
                  name : name,
                  spend : spend
              }],
              
            //   expenses : budget - spend ,
            budget : budget - spend,
            expenses :  +spend + +expenses ,
              name : '',
                  spend : 0
          })
          console.log( name , spend ,expenses )
      }

    render(){
        let {expenses,budget, totalExpenditures } = this.state
       
        return ( 
        <div>
        
        <div className='badge badge-info'>
        <h2 >  Total Budget :   {budget} </h2>
            </div>   &nbsp; &nbsp; &nbsp;
        <div className='badge badge-danger'>
        <h2 >  Total expenses :   {expenses} </h2>
            </div>  

             {/* Forms  */}
             <br/><br/><br/>
             <div className='input-group' style={{justifyContent:'center', alignItems:'center' , flexDirection:'column'}}>
                 <div style={{justifyContent:'spacebetween', alignItems:'center' , flexDirection:'row'}}>

                 <TextField
          label="Budget"
          id="outlined-margin-dense"
          value={this.state.totalBudget}
          helperText="Total Budget"
          margin="dense"
          variant="outlined"
          onChange={ (e)=> this.setState({totalBudget : e.target.value}) }
          
        />
                
             
             <Button onClick={() => this.setState({budget:this.state.totalBudget, totalBudget:0})} style={{marginTop:'9px' , marginLeft:'25px'}} variant="contained" color="primary">
            Budget
            </Button>
                 </div>
             {console.log(this.state.totalBudget)}

        <br/><br/>
        <TextField
          required
          id="standard-basic"
          label="expense"
          placeholder="Activity in which you spent"
          name='name'
          onChange={this.handleChange}
          value={this.state.name}
        />
        <br/><br/>
        
        <TextField
          required
          id="standard-basic"
          label="Amount"
          placeholder="Amount of money you spent"
          name='spend'
          onChange={this.handleChange}
          value={this.state.spend}
        />
        <br/><br/>
            
                    <Button onClick={this.totalExpenditure} variant="contained" color="primary">
            Add
            </Button>
             </div>

            <div className='badge badge-info' style={{
                width: '100%',
                fontSize : '14px',
                
            }}>
                { totalExpenditures.map( 
                    (value,index) => {
                        return (
                            <h4 key={index}>
                                {`${value.name} spend ${value.spend}`} 
                            </h4>
                        )
                    }
                 ) }
            </div>
        </div>
        )   
}
}