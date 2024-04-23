

const cricket = document.querySelector('.cricket');

 const getAllContinents = async()=>{

              try {

                const response = await fetch(`https://cricket.sportmonks.com/api/v2.0/continents${requestOptions}`)

                const data = await response.json();


                const list = document.createElement('ul');

                cricket.innerHTML = '';

                data.forEach(continent => {
                   const continent = document.createElement('li');
                   
                   li.textContent = continent.name;

                   list.appendChild(li);

                });
                   cricket.appendChild(list)


              } catch (error) {

                console.log('error fetching', error);   

              }
 }


 getAllContinents();



