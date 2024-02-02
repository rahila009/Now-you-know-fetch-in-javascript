
const showData = (result) =>{
    console.log(result)
    result.map(val => {
        const element = document.createElement("div");
        element.innerHTML = `<h1>${val.name}</h1>
        <h1>${val.email}</h1>
        <h1>${val.phone}</h1>`;
        console.log(element)
        document.body.appendChild(element)
    });
}


const fetchData = async () =>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result  =await response.json();
        showData(result)
    } catch (error) {
        console.log(error)
    }
}

fetchData()