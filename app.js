function myFunction() {
    var a = document.getElementById('exampleInputEmail1').value
    //console.log(a);
    loadUser(a)
    
    
}


const element = document.querySelector('form');
element.addEventListener('submit', event => {
    event.preventDefault();
    // actual logic, e.g. validate the form

});

async function loadUser(a) {
    document.getElementById('newsBody').innerHTML = ''
    try {

        const url = `https://api.github.com/users/${a}/repos`

        const response = await fetch(url);
        var data = await response.json();
        var div = document.createElement("div")
        div.setAttribute("class", "digu")
        div.setAttribute("id", "kajal")
        var ul = document.createElement("ul")
       
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li")
            li.innerHTML = data[i].name;
            ul.appendChild(li)
            div.appendChild(ul)
            const newsBody = document.getElementById('newsBody');
            newsBody.append(div);
            document.body.appendChild(newsBody);



            var ij = data[i].name
    
           // console.log(ij);
           //bro here i am facing the issue i have just uncomment the things
            /*async function loadUser2(a) {
                try {
                    const url = `https://api.github.com/repos/${a}/${ij}/git/trees/master?recursive=1`
                    const response = await fetch(url);
                    var data = await response.json();
                  console.log(data.tree[3].path)
                 // console.log(typeof(data1.tree[0]))
                }
                catch (err) {
                    console.log("err1")
                }
            }
            loadUser2(a)
            */
           
          
         
         

        }
    }
    catch (err) {
        console.log("Name not found")
    }
   
}





