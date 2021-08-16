import React from 'react';

const LandingPage = () => {
  return (


    <div className="container"> 
       
         <header> 
           
            <div className="logo1">
                <a href="index.html">
                    
                    <img src="images/QuadLogo.png" alt="Quad Logo for manual" width="90px">
                </a>
                
            </div>
            <nav>
                <div className="navbutton">
                    <a href="about-us.html">About</a>
   
                <div className="dropdown">
                    <div className="navbutton">
                        <a href="about-us.html">Our Story</a>
                    </div>
                </div>

                </div>

                <div className="navbutton">
                    <a href="supplies.html">Supplies</a>

                    <div className="dropdown">
                        <div className="navbutton">
                            <a href="supplies.html">Personal Items</a>
                            
                           
                        </div>
                       
                        </div>
                        
                        
                </div>
               
              
               

                <div className="navbutton">
                    <a href="disclaimer.html">Disclaimer</a>
                    <div className="dropdown">
                        <div className="navbutton">
                            <a href="disclaimer.html">Disclaimer Info</a>
                        </div>
                    </div> 
                </div>
                
            </nav>
            
        </header>
        <hr>
        <main>
           
            <div className="herobox1">
                <h1>Quad Manual</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, at.</p>
                <p>Ipsam similique neque officiis nemo, eum necessitatibus voluptatibus. Architecto alias tenetur, ducimus tempora non quod facilis laudantium nemo omnis sit!.</p>
            </div>
            <div className="herobox2">
               <img src="images/QuadVaca.png" alt="Vacation Pic">
            </div>
         
          
        </main>


        <div className="cards">
            <div className="card1">
                <a href="personal-care.html">
                <i className="fas fa-hand-holding-medical"></i>
                 <h2 className="boxed">Personal Care</h2>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas non sit eum hic quos?
                </p> 
             </a>
            </div>
            <div className="card2">
                <a href="vacation.html">
                <i className="fas fa-restroom"></i> 
                <h2 className="boxed">Vacation & Leiser</h2>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas non sit eum hic quos?
                </p> 
            </a>
            </div>
            <div className="card3">
                <a href="#">
                <i className="fas fa-question-circle"></i>
                <h2 className="boxed">Qestions & Comments</h2>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas non sit eum hic quos?
                </p> 
            </a>
            </div>
           


        </div>
        <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

      
        
        <script>
        //Get the button
        var mybutton = document.getElementById("myBtn");
        
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
        </script>
                       

    </div>
  
    
    <footer className="back-to-top">
        <p>Quad Manual, Ohio - Copyright 2021©<a href="#header"></a> </p> 
      
        <hr width="300px">
        <div className="contact" id="contact">
            <div className="contact__header">
              <div className="contact-links">
        
        <div className="facebook__icon">
            <li style="list-style-type: none;" className="facebook__link"><a href="https://www.facebook.com/eduardo.colon.10" target="_blank"><img src="images/outline_facebook_black_24dp.png" alt="" width="40px" height="40px"></a></li>
          </div>

          <div className="linkedin__icon">
            <li style="list-style-type: none;" className="linkedin__link"><a href="https://www.linkedin.com/in/eduardo-colon-435812206/" target="_blank"> <img src="images/icon2.png" alt=""  width="40px" height="40px"></a></li>
            
          </div>
        
        <div className="gmail__icon">
          <li style="list-style-type: none;" className="gmail__link"><a href="mailto:Eddiecsworld76@gmail.com" target="_blank"><img src="images/outline_mail_outline_black_24dp.png" alt="" width="40px" height="40px"></a></li>
        </div>
<div>
   
    
</div>
           
  


}
  );
};

export default LandingPage