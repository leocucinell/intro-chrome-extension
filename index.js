document.addEventListener('DOMContentLoaded', async () => {
    const itemsList = document.getElementById("items-list");
    //Make a call to json placeholder
   
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        const usersHtml = users.map((user) => {
            return `
                <li class="user">${user.name}</li>
            `
        });
        itemsList.innerHTML = usersHtml;
    } catch(err) {
        console.log(err);
    }
});