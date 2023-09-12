import {React} from 'react'
import shopData from './shopData'
import { render } from 'node-sass'

class shop extends React.Component{
   constructor(props){
      super(props)

      this.state={
         collection:shopData
      }
   }
   render(){
      return <div>ShopPage</div>
    }

}





export default shop;