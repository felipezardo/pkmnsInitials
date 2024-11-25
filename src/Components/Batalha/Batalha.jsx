import * as S from "./style";
import costaCharmander from "../../assets/images/backcharmander.gif"
import rivalSquirtle from "../../assets/images/squirtle.gif"

export default function Batalha (){

    return(
        <S.batalhaPokemon>
            <S.Gba>
            <h2>Batalha entre Pokemons</h2>
            <S.Luta>
                
                <img className="Player" src={costaCharmander} alt="" />
                <img className="Rival" src={rivalSquirtle} alt="" />


            </S.Luta>
            <S.Botoes>
                
                <S.Golpes>                    
                    <S.Descricao><h5>descrição dos golpes</h5></S.Descricao>
                    <S.Moves>

                    <button>Move 1</button>
                    <button>Move 2</button>
                    <button>Move 3</button>
                    <button>Move 4</button>
                    
                    </S.Moves>
                </S.Golpes>
                <S.lutarFugir>
                    
                    <button className="Lutar">Lutar!</button>
                    <button className="fugir">Fugir</button>
                </S.lutarFugir>
            </S.Botoes>


            </S.Gba>
            
        </S.batalhaPokemon>
    )
}