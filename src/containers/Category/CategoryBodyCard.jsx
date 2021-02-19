import React from 'react';
import { Link } from 'react-router-dom';






let publicUrl = process.env.PUBLIC_URL+'/'
let imagealt = 'image'






const CategoryBodyCard = () =>{


    return (
        
        <div className="add-area mb-4">
        <a href="#"><img src={publicUrl+"assets/img/add/2.png"} alt="img" /></a>
      </div>

    )
}

export default CategoryBodyCard;

              