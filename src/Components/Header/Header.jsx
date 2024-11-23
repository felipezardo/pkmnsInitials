import * as S from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header(){

    return(

        <S.Header>
            <nav>
                <ul>
                    <li><Link to="/">Kanto</Link></li>
                    <li className="meio"><Link to="/Johto">Johto</Link></li>
                    <li><Link to="/Hoenn">Hoenn</Link></li>
                </ul>
            </nav>
        </S.Header>
    );


}