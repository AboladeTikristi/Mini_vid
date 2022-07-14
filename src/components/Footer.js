import React from 'react'
function Footer() {
  return (
    <>
     <footer>
        	<div style={{backgroundColor:"black",height:"120px"}} class="footer-top p-2 text-dark">
		        <div class="container-fluid">
		        	<div class="row">
		        		<div class="col-md-4 col-lg-4 footer-about wow fadeInUp animated"style={{visibility: "visible",animationName:"fadeInUp"}}>
		        			<h3>Contact</h3>
	                    </div>
		        		<div class="col-md-4 col-lg-4 offset-lg-1 footer-contact wow fadeInDown animated" style={{visibility: "visible",animationName:"fadeInDown"}}>
		                	<p><i class="fas fa-phone"></i> Phone: +234 802 854 1625</p>
		                	<p><i class="fas fa-envelope"></i> Email: <a style={{textDecoration:'none'}} href="ladyj2183@gmail.com">ladyj2183@gmail.com</a></p>
	                    </div>
	                    <div class="col-md-4 col-lg-3 text-danger footer-social wow fadeInUp animated" style={{visibility: "visible",animationName:"fadeInUp"}}>
	                    	<h3>Follow us</h3>
	                    	<p>
	                    		<a ><i class="fab fa-facebook ms-2"></i></a> 
								<a><i class="fab fa-twitter ms-2"></i></a> 
								<a><i class="fab fa-google-plus-g ms-2"></i></a> 
								<a><i class="fab fa-instagram ms-2" ></i></a> 
								<a><i class="fab fa-pinterest ms-2" ></i></a>
	                    	</p>
	                    </div>
		            </div>
		        </div>	
                <div class="row">
	           	<div style={{color:'red'}} class=" footer-copyright ">
	                    	<p>© Netflix</p>
	            </div>
	        </div>
	        </div>
	        
	        	
        </footer>
    </>
  )
}

export default Footer