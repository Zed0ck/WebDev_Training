const section = document.querySelector('section');
            
            let requestURL = 'https://elitedangerous-website-backend-production.elitedangerous.com/api/galnet';
            let request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function(){
                const news = request.response;
                populateNews(news);
            }

            function populateNews(jsonObj){
                for(let i = 0; i < 6; i++){
                    const myDiv1 = document.createElement('div');
                    myDiv1.className = 'news';
                    section.appendChild(myDiv1);
                    

                    const myH2 = document.createElement('h2');
                    myH2.textContent = jsonObj[i].title;
                    myDiv1.appendChild(myH2);
    
                    const myDiv2 = document.createElement('div');
                    myDiv2.innerHTML = jsonObj[i].body;
                    myDiv1.appendChild(myDiv2);
                }
            }