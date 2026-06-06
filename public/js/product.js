function onSubmitHandler(e)
{
    e.preventDefault();
    console.log("form submitted");
    const product =document.getElementById("product").value;

    const obj={
        "productname":product
    }
    axios.post("http://localhost:3000" + "/api/products" , obj)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    });
}