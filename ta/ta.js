


var toeicApi = 'http://localhost:3000/toeic';
fetch(toeicApi)
  .then(function(response){
    return response.json();
  })
  .then(function(toeic){
      render(toeic);
  })
  let container = document.querySelector(".container")
  container.innerHTML ="";
  function render(d){
   
    d.forEach(item => {
        let boxContainer = document.createElement("div");
        boxContainer.classList.add("box-container");
        boxContainer.innerHTML =`
        <h1>${item.mean}</h1>
        <label for="ta"> Tiếng anh</label>
        <input type="text" id="ta">
        <label for="example">Example</label>
        <input type="text" id='example'>
    </div>
    <div id="btn" class="bx bx-chevrons-down"></div>
    <div class="box2">
           <h4>${item.mean}</h4>
           <h3> ${item.vob}<span>(${item.spelling})</span></h3>
           <h5>${item.example}</h5>
    </div>
    <div class="border"></div>
        `;
        container.append(boxContainer);
        let box = container.querySelectorAll(".box-container")
       
        for(var i= 0; i < box.length;i++){
            let btn = box[i].querySelectorAll("#btn");
            btn.forEach(item=> {
              item.addEventListener("click",(e)=>{
                    let pos = e.target.parentElement;
                    let box2 = pos.querySelector(".box2");
                    if(box2.style.display == "none"){
                      box2.style.display ="flex";
                       item.setAttribute("class","bx bx-chevrons-up")

                    }else {
                      box2.style.display ="none";
                      item.setAttribute("class","bx bx-chevrons-down")
                    }
              })
            })
              
        }

        


        
    

  
    
    })
  };
  
  
  
  
  

 