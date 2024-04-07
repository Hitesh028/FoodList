// import { useEffect } from "react";
// import { useState } from "react";

// function PokemonAPI()
// {
//     const [countOfClap,setCountOfClap] = useState(0);
//     const [phase,setPhase] = useState('Mounting Phase');
//     const [selectedPokemon, setSelectedPoken] = useState(null);
//     const [PokemonData,SetPokemonData] = useState({
//         id : "",
//         name : "",
//         height : "",
//         abilities : []
//     });
//     console.log(`Phase :: ${phase}`);
//     console.log("pokemon api component");
//     console.log(PokemonData);

//     const [loading, setLoading] = useState(false);


//     useEffect(() => {

//         function FromBigDataToReleventData(PokemonDatas){
//             const {id,name,height,abilities = []} = PokemonDatas;
            
//             const abilitiesName = abilities.map(abilityObj => {
//                 const {ability} = abilityObj;
//                 const {name} = ability;
//                 return name;
//             });

//             return {
//                 id,name,height,
//                 abilities:abilitiesName,
//             }
//         }
        
//         async function fetchPokemonData()
//         {
//             try{
//                 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
//                 const data = await response.json();
//                 const releventData = FromBigDataToReleventData(data);
//                 setTimeout(() => {
//                     SetPokemonData(releventData);
//                     setLoading(false); // MOCK
//                   }, 8000);
                
//             } catch(error)
//             {
//                 alert("Error with Server");
//             }
            
//         }
//         fetchPokemonData();
//         // fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {return res.json()}).then((data) => {console.log(data);});
//     },[]);

//     function onSelectoinChange(event) {
//         const value = event.target.value;
//         console.log(value);
//         setSelectedPoken(value);
//         console.log(selectedPokemon,"SelectedPokemon");
//       }

//     return (
//         <>
//         <h1>Pokemon</h1>
//         <button
//         onClick={() => {
//           setCountOfClap((old) => old + 1);
//           setPhase(("Update Phase"));
//         //   setPhase("UPDATE PHASE");
//         }}
//       >
//         Clap {countOfClap}
//       </button>
//       <div>
//         <h1>Select pokemon</h1>
//         <select onChange={onSelectoinChange}>
//           <option value={""}>SELECT NEXT POKEMON (pokemon)</option>
//           <option value={"ditto"}>DITTO (pokemon)</option>
//           <option value={"pikachu"}>PIKACHU (pokemon)</option>
//           <option value={"bulbasaur"}>BULBASAUR (pokemon)</option>
//         </select>
//       </div>
//       {/* <h5>Pokemon Data {PokemonData}</h5> */}

//         {selectedPokemon && !loading ? (<div>
//             <h1>Pokemon Card</h1>
//             <div style={{display:"flex",flexDirection:"column",gap:"10px",border:"1px solid black",width:"300px",}}>
//                 <div style={{display:"flex",flexDirection:"row",gap:"10px",}}>
//                     <p>{PokemonData.name}</p>
//                     <p>{PokemonData.id}</p>
//                 </div>
//                 <div style={{display:"flex",flexDirection:"row",gap:"20px",}}>
//                     <p>{PokemonData.abilities.join(",")}</p>
//                     <p>{PokemonData.height}</p>
//                 </div>
//             </div>
//         </div>
//         ): loading ? (
//             <h1>LOADER ......</h1>
//           ) : null
// }

//         </>
//     );

// }
// export default PokemonAPI;