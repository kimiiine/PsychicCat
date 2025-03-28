document.addEventListener("DOMContentLoaded", function () {
/////////////////////////////////////////////////////////////////////////////////

    const mao = () =>{
        document.getElementById("audio").play();
    }


    const catbtn = document.getElementById("catbtn");

    const mock = document.getElementById("mock");
    mock.classList.toggle("hidden");
    const table = document.getElementById("tbl");

    const back = document.getElementById("back")
    back.classList.toggle("hidden");
    const inst = document.getElementById("inst");
    const ex = document.getElementById("ex");

    const rev = document.getElementById("rev");
    rev.classList.toggle("hidden");
    const cat = document.getElementById("cat");

    const icon = document.getElementById("magic");
    icon.classList.toggle("hidden");

    const reveal = () => {
        table.classList.toggle("hidden");
        mock.classList.toggle("hidden");
        inst.classList.toggle("hidden");
        ex.classList.toggle("hidden");
        back.classList.toggle("hidden");
        cat.classList.toggle("hidden");
        rev.classList.toggle("hidden");
        icon.classList.toggle("hidden");
    }

    let chosenIcon;

    const magic = () => {
        const tableCells = document.querySelectorAll('#tbl td');
    
        const icons = [
            'fa-snowflake', 'fa-snowman', 'fa-bolt', 'fa-socks', 'fa-skiing', 'fa-swimmer',
            'fa-leaf', 'fa-gem', 'fa-star-and-crescent', 'fa-star', 'fa-paper-plane',
            'fa-thumb-tack', 'fa-cat', 'fa fa-pie-chart', 'fa-vials', 'fa-tint', 'fa-thumbs-up', 'fa-surprise'
        ];
        

        chosenIcon = icons[Math.floor(Math.random() * icons.length)]; 
    
        tableCells.forEach(cell => {
            let text = cell.textContent;
            let number = parseInt(text.split(':')[0]); 
                if (number % 9 === 0) {
                    let numberPart = text.slice(0, -1); 
                    cell.classList.add('magic');
                    cell.innerHTML = `${numberPart} <i class="fas ${chosenIcon}" style="font-size:23px; color:black"></i>`;
                }
            })
            document.getElementById("magic").innerHTML = `<i class="fas ${chosenIcon}" style="font-size:120%"></i>`;
    };
    

    const fill = () => {
        magic();
        const tableCells = document.querySelectorAll('#tbl td');
    
        const icons = [
            'fa-snowflake', 'fa-snowman', 'fa-bolt', 'fa-socks', 'fa-skiing', 'fa-swimmer',
            'fa-leaf', 'fa-gem', 'fa-star-and-crescent', 'fa-star', 'fa-paper-plane',
            'fa-thumb-tack', 'fa-cat', 'fa fa-pie-chart', 'fa-vials', 'fa-tint', 'fa-thumbs-up', 'fa-surprise'
        ];
    
        tableCells.forEach(cell => {
            if (!cell.classList.contains('magic')){
            let text = cell.textContent;
            let numberPart = text.slice(0, -1); 
            let randomIcon;
            do{
            randomIcon = icons[Math.floor(Math.random() * icons.length)]; } while (randomIcon==chosenIcon);
            cell.innerHTML = `${numberPart} <i class="fas ${randomIcon}" style="font-size:23px; color:black"></i>`;}
        });
    };
    
    


    catbtn.addEventListener('click', reveal);
    catbtn.addEventListener('click', mao);
    
    back.addEventListener('click', reveal);
    back.addEventListener('click', fill);

    fill();




});
