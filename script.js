const selectEl = document.getElementById('types');

        selectEl.addEventListener('change',function(){
            const selectedText = selectEl.options[selectEl.selectedIndex].text;
            var myVar = selectedText;
            console.log(myVar);
        })


const submit = document.querySelector('#submit');
        const bal = document.querySelector('.bal');
        submit.addEventListener('click', () => {
            const text = document.querySelector('.text');
            const inin = document.querySelector('.inin');
            const exin = document.querySelector('.exin');
            if (text.value < 0) {
                mean = Number(text.value);
                means = Number(exin.innerText);
                exin.innerText = -mean + means;

                main = Number(text.value);
                inin.innertext = main;
                mains = Number(inin.innerText);
                console.log(mains + main);

                bal.innerText = mains + main;
                console.log(typeof(bal));

                const used = document.querySelector('.used');
                using = used.value;

                const history = document.querySelector('#history');
                let li = document.createElement('li');
                
                li.innerHTML = using + " " + Math.abs(text.value);
                history.appendChild(li);

                li.style.backgroundColor = "red";

                text.value = "";
                used.value = "";

            }

            else {
                main = Number(text.value);
                inin.innertext = main;
                mains = Number(inin.innerText);
                console.log(mains + main);
                inin.innerText = mains + main;

                bal.innerText = inin.innerText;

                const used = document.querySelector('.used');
                using = used.value;

                const history = document.querySelector('#history');
                let li = document.createElement('li');

                
                li.innerHTML = `${using} ${Math.abs(text.value)}`;
                history.appendChild(li);

                text.value = "";
                used.value = "";
            }
        })


