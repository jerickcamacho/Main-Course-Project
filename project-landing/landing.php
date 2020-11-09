<!DOCTYPE html>
<php 
if (isset($_POST['submitted'])) {
    
}

?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Landing Page</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>

        <!--Use Story #1 id="header"-->
        <header id="main-header"> J & C Computer Online Shop and Services </header>
        
        <img id="header-img" src="img/Logo.jpg" alt="Mylogo">
        <hr>
      
             <!--User Story #3 id="nav-bar"-->  
             <nav id="nav-bar"> 
                <!--User Story #4 id="nav-link"-->  
                <li><a href="project_landing.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>         
             </nav>
            
             <!--Animation-->
             <!--User Story #6 product video-->
             <section> 
             <div id="video">
                <div id="home"></div>
                <img src="img/cpu.jpg" width= 200p height="150" alt="Slide 4"/>
                <img src="img/monitor.jpg" width= 200p height="150" alt="Slide 3"/>
                <img src="img/adobe.jpg" width= 200p height="150" alt="Slide 2"/>
                <img src="img/repair.jpg" width= 200p height="150" alt="Slide 1"/>
              </div>
            </section>
            <!--Footer section-->
            <footer id="container">
                  <div id="contact">
                     <header>Your info</header>
                     <hr>
                     <!--User #7-#12-->
                     <form id="form" action="get_data.php">
                        <label id="name"><strong><em>Name</em></strong></label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required> 
                        <br>

                        <label id="number"><strong><em>Contact Number</em></strong></label>
                        <input type="number" name="number" id="number" placeholder="Enter your contact number" required> 
                        <br>

                        <label id="email"><strong><em>Email</em></strong></label>
                        <input type="text" name="email" id="email" placeholder="Enter your email address" required> 

                        <div id="text-area">
                          <label id="message"><em>Message</em></label></br>
                          <textarea name="message" id="message" placeholder="your request..."></textarea>
                      </div>
                      <br>
                        
                        <div>
                              <input type="button" id=submit value="Submit" onclick="Send_Data()"/><br /> 
                        </div>
                     </form>
                   </div>

                    <!--details to contact-->
                    <h1 id="contact-header"> Contact Us</h1>
                        <div id="mycontact">
                          <div class="email"> <img src="img/email.png" alt="email photo" >jerickcamacho42@gmail.com</div> 
                          <div class="mynumber"><img src="img/tel.png" alt="telephone photo"> #09953335041</div>
                          <div class="telephone"> 754-3010</div>
                          <div class="location"> <img src="img/location.jpg" alt="location photo"> 710 Leveriza St' Malate Manila</div>
                          <div class="youtube"><img src="img/youtube.png" alt="youtube"><a href="https://www.youtube.com/">Our YouTube Channel</a></div>   
                          <div class="facebook"><img src="img/facebook.png" alt="facebook"><a href="https://www.facebook.com/">Our Facebook Page</a></div>
                        </div> 

                        <div id="google-map"> 
                           <!-- Google Map Copied Code --> 
                         <h1 id="address">Address</h1>  
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.34701293160253!2d120.98959100524914!3d14.56758110367911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9cac0b89c03%3A0x2faf6a8abb88c828!2sJ%20%26%20C%20Computer%20Online%20Shop%20and%20Services!5e0!3m2!1sen!2sph!4v1603692840607!5m2!1sen!2sph" 
                     width="1000" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>"    
                       </div>    

            <footer id="foot">&copy; J & C Computer Online Shop and Services.2020 All Rights Reserved</footer>
            </footer>

           
</body>
</html>