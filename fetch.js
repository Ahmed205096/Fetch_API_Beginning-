const myResponse = fetch("https://api.github.com/users/elzerowebschool/repos");

myResponse
    .then(
        (result) => {
            result = result.json();
            result.length = 10;
            return result; })
    .then(
        (result) => {
            result.length = 5;
            for (let i = 0 ; i < result.length ; i++)
            {
                const ul = document.createElement("ul");
                const li = document.createElement("li");
                const text_node = document.createTextNode(result[i].name);
                li.appendChild(text_node);
                ul.appendChild(li);
                document.body.appendChild(ul);
            }
        })
    .catch(
        (error) => console.log(error));