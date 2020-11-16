import React, {useEffect} from "react";


export default function Weather(){

    return(
        <form >
            <input type="text" name="city" placeholder="Город" />
            <button>Получить погоду</button>
      </form>
    )
}