import QuotePage from "../presentational/quotePagePresentational"
import { indexChange } from "../redux/actions/indexChange"
import {  connect } from "react-redux"
 
 const QuotePageComponent=({index,nextIndex})=>{
       
  
    return(
    <QuotePage
      quote={index}
      handleclick={nextIndex}
     />
    )
 }


  

  const mapStateToProps=(state)=>{
   
   return {
    index: state.indexReducerRoot.index
   };
}
  const mapDispatchToProps=(dispatch)=>{
   
    
      return{

    nextIndex:()=>{ 
      const randomIndex=Math.floor(Math.random ()*20)
        return dispatch(indexChange(randomIndex))
      }
  }
}
  

   export  default connect(mapStateToProps,mapDispatchToProps)(QuotePageComponent);