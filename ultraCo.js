
//Rendering car details to the main section onload

    var xhr = new XMLHttpRequest();

    function loadCars() {
        console.log("Car details button clicked");

        xhr.open('get', 'cars.json', true);
        
        xhr.onload = function(){

            if(this.status == 200){
                
                var cars = JSON.parse(xhr.responseText);
                console.log(cars);
                
                var output = '';

                
                for(let i=0; i<3; i++){
                    output += 
                    `<div id="full-div">
                    <div>
                    <h3 id="brand"> ${cars[i].Brand}</h3>
                    </div>
                    <div>
                    <h4 id="model"> ${cars[i].Model}</h4>
                    </div>
                    <div id="img-div">
                    <img id="img" src="${cars[i].image}" alt="Image not available">
                    </div>
                    <div>
                    <h5 id="price"> ${cars[i].Price}</h5>
                    </div>
                    </div>`
                }
                
                document.getElementById('container').innerHTML = output;
            
            }

        }
        
        xhr.send();
    }

//Rendering more cars on button click
    document.getElementById('btn').addEventListener('click', loadMoreCars);

    var xhr1 = new XMLHttpRequest();

    function loadMoreCars() {
        xhr1.open('get', 'cars.json', true);

        xhr1.onload = function(){
            var moreCars = JSON.parse(xhr1.responseText);
            
            var output1 = "";

                for(var j=3; j<moreCars.length; j++){
                    output1 += 
                    `<div id="full-div">
                    <div>
                    <h3 id="brand"> ${moreCars[j].Brand}</h3>
                    </div>
                    <div>
                    <h4 id="model"> ${moreCars[j].Model}</h4>
                    </div>
                    <div id="img-div">
                    <img id="img" src="${moreCars[j].image}" alt="Image not available">
                    </div>
                    <div>
                    <h5 id="price"> ${moreCars[j].Price}</h5>
                    </div>
                    </div>`
                
                }
            
                if(this.status == 200){
                    //Renders output1 to container1
                    document.getElementById('container1').innerHTML = output1;
                    console.log(moreCars);
                    document.getElementById('btn').style.visibility = "hidden";
                }
                else{
                    alert("No more cars to load");
                }

            }
            xhr1.send(); 
        }
        
    