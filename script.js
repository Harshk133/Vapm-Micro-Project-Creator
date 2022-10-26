console.log("Script is running...");
function generatePdf(){
    let element = document.getElementById("container");  
    

    html2pdf().from(element).save();


    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- Css -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body bgcolor="cornsilk">
        <h1 align="center"><b>Maharashtra Board Technical Education</b></h1>
        <h1 align="center" style="color: skyblue;">Mumbai</h1>
        <h3 align="center" style="color: rgb(255, 121, 121); font-size: larger;">Shri Vishweshwar Shikshan Prasarak Mandal's</h3>
        <h1 align="center" style="color: red;"><b>Vishweshwarayya Abhiyantriki Padvika Mahavidyalaya <br> Almala</b></h1>
        <br>
        <div align="center">
            <img src="./download (1).jpg" alt="Image">
        </div>
        <br>
        <h1 align="center" style="color: rgb(255, 121, 121)">Certificate</h1>
        <article>
            <p>This is to certify that, <b style="color: rgb(255, 155, 121)">${userName}</b> students of our institute from <b>Second</b> year <b>Computer Engineering (CO3I)</b> have successfully completed the microproject report on <b style="color: rgb(255, 155, 121)">"${userSubject}"</b> of Course <b>DMS (22319)</b> as part of curriculum by the Maharashtra Board Technical Education, Mumbai.</p>
            <br>
            <p>For partial fulfillment of <b style="color: rgb(220, 220, 85)">"Diploma in Computer Engineering"</b> during the academic year 2022-23.</p>
        </article>
        <br>
        <div class="plate">
            <div>
                <h3 style="color: blue;" class="fs">GUIDE</h3>
                <P class="purple fs">Mr. Lokare A. P.</P>
            </div>
            <div>
                <h3 style="color: blue;" class="fs">HOD</h3>
                <P class="purple fs">Mr. Ambulge S. S.</P>
            </div>
        </div>
        <br>
        <h3 align="center" style="color: blue;" class="fs">PRINCIPAL</h3>
        <P align="center" class="purple fs">Mr. Dharashive P. S.</P>
    </body>
    </html>`;
    element.innerHTML = html;
    
}