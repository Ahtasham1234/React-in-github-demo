import React from 'react';
import './ListItems.css'
import DeleteIcon from '@material-ui/icons/Delete';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key="item.key">
            <p>
            {item.text}
            <span><DeleteIcon
            onClick={ () => props.DeleteItem(item.key)
            }/>
            </span></p>
          
           
            </div>
            
        })
        return(
            <div>{listItems}
             </div>
        )
}
export default ListItems;