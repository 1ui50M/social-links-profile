/*console.log("hola amigos :)")
function sumar(numeroUno,numeroDos){
    let resultado = numeroUno+numeroDos;
    return resultado
}*/
function createProfile()
{
    const profile=document.createElement("section");
    profile.className="profile";
    const body=document.querySelector("main");
    const main=document.querySelector("main");
    body.appendChild(profile);
    const header= document.createElement("header");
    profile.appendChild(header);
    const imagen=document.createElement("img");
    imagen.src="assets/images/avatar-jessica.jpeg";
    imagen.alt="Avatar de Jessica";
    header.appendChild(imagen);
    const description=document.createElement("div");
    description.className="description";
    profile.appendChild(description)
    const h2=document.createElement("h2");
    const nombre=document.createTextNode("Jessica Randall")
    h2.appendChild(nombre)
    description.appendChild(h2)
    const p=document.createElement("p");
    description.appendChild(p)
    const ubicacion=document.createTextNode("London, United Kingdom")
    p.appendChild(ubicacion)
    const p2=document.createElement("p2");
    const complemento=documento.createTextNode("Front-end developer and avid reader.")
    p2.appendChild(complemento)
    description.appendChild(p2)
}
const addProfile=document.querySelector("Button")
addProfile.addEventListener("click", createProfile);


