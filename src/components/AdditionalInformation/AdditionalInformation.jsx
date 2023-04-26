import { NavLink } from "react-router-dom" 
import css from "./AdditionalInformation.module.css"
export const AdditionalInformation = () => {  

    return (
        <div className={css.additionalBox}>
            <h3>Additional informaton</h3>
    <nav className={css.additionalInf}>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </nav >
            </div>
)
}