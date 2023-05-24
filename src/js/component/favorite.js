import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Favorite = () =>{

    const {
        store,
        actions,
    }= useContext(Context)

    return(
        <div className="ml-auto">
        <div className="dropdown">
              <a className="btn btn-outline-warning dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorite {
                store.favorites.length
            }
             </a>

              <ul className="dropdown-menu dropdown-menu-end">
                {
                    store.favorites.map( (item) =>{
                        return (
                            <li className="dropdown-item">
                                {item.name}
                                <span onClick={()=> actions.addFavorites(item)}>
                                    ❌
                                </span>
                            </li>
                        )
                    })
                }
              </ul>
        </div>
</div>
    )
}

export default Favorite