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
        console.log(data)
        var div = document.createElement("div")
        div.setAttribute("class", "digu")
        div.setAttribute("id", "kajal")
        var ul = document.createElement("ul")
       
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li")
            li.innerHTML = data[i].name;
            li.setAttribute("id","singh")
           
            var ij = data[i].name
            await loadUser2(a,ij)
            async function loadUser2(a,ij) {
                try {
                    const url = `https://api.github.com/repos/${a}/${ij}/git/trees/master?recursive=1`
                    const response1 = await fetch(url);
                    var data1 = await response1.json();
                  //console.log(data1)
                  var result = Object.keys(data1).map((key) => [Number(key), data1[key]]);
                  //console.log(result.length)
    
                  //console.log(typeof(data1))
                    
                  //console.log(data1.tree[i.path])
                  //console.log(result[2][1])
                  
    
                  for(var i=0;i<result[2][1].length;i++){
                    //  document.getElementById("singh").innerHTML+=`<li></li>`
        //var li1=document.createElement("li")
                   // ul.appendChild(li1)
                   var ul1=document.createElement("ul")
                   li.appendChild(ul1)
                   ul1.setAttribute("class","bablu")
                   var li1=document.createElement("li")
                   ul1.appendChild(li1)
                   li1.innerHTML=result[2][1][i].path
                      console.log(result[2][1][i].path)
                  }
                    
                 // console.log(typeof(data1.tree[0]))
                }
                catch (err) {
                    console.log("err1")
                }
            }
            ul.appendChild(li)
            div.appendChild(ul)
            const newsBody = document.getElementById('newsBody');
            newsBody.append(div);
            document.body.appendChild(newsBody);



         // console.log(data)  
    
           //console.log(ij);
           //bro here i am facing the issue i have just uncomment the things
          
        
            
           
          
         
         

        }
    }
    catch (err) {
        console.log("Name not found")
    }
   
}






