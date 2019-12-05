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
                const myH1 = document.createElement('h1');
                myH1.textContent = jsonObj[1].title;
                section.appendChild(myH1);

                const myDiv = document.createElement('div');
                //myDiv.textContent = jsonObj[1].body;
                myDiv.innerHTML = jsonObj[1].body;
                section.appendChild(myDiv);
            }