
      function auth() {
          if(typeof(Storage) !== "undefined") {
              if (sessionStorage.verified=="true") {
                console.log("Logged in already");
                localStorage.attempts=0;
                $( ".main").css("visibility","visible");
              }
              else {
                
                if(localStorage.timestamp){
                  console.log("Timeout");
                  $( ".main").html("<h1 class='post-title' style='margin-top:5rem;text-align:center'>You aren't allowed to visit this site.</h1><p class='post'>You have tried to enter the correct password <span style='color:black;font-weight:800'>5 times</span> and <span style='color:red;font-weight:800'>Failed</span>.<br><br>That usually means that you are not allowed to be here. So stop fucking around and get the hell out of here.<br><br>You wont be able to log in today again, Sayonara!</p>");
                       
                return;
                }
                
                console.log("not verified");
                var time=prompt("Please Enter The Password:");
                
                //var url="http://abhishekbalam.rf.gd/?password="+pass;
                //console.log("prepared url:" + url);
                // $.get(url, function(data){
                //   console.log(data);
                //   if(data=="true"){
                //     console.log("logged in");
                //     sessionStorage.verified = true;
                //   }
                //   else{
                //     alert("error!");
                //     sessionStorage.verified = false;
                //   }
                // }); 
                
                if(time==(![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]){
                    console.log("logged in");
                    sessionStorage.verified = true;
                  }
                  else{
                    alert("Invalid Password!");
                    sessionStorage.verified = false;
                    
                    if(Number(localStorage.attempts)>0 || 1){

                     if(Number(localStorage.attempts)>=5){
                      $( ".main").html("<h1 class='post-title' style='margin-top:5rem;text-align:center'>You aren't allowed to visit this site.</h1><p class='post'>You have tried to enter the correct password <span style='color:black;font-weight:800'>5 times</span> and <span style='color:red;font-weight:800'>Failed</span>.<br><br>That usually means that you are not allowed to be here. So stop fucking around and get the hell out of here.<br><br>You wont be able to log in today again, Sayonara!</p>");
                       var date= new Date();
                       date.setDate(today.getDate());
                       localStorage.timestamp=date;
                    }
                     else{ 
                        $( ".main").html("<h1 class='post-title' style='margin-top:5rem;text-align:center'>You aren't allowed to visit this site.</h1>");
                        //<p class='post'>You have "+(5-Number(localStorage.attempts))+" attempts to enter the right answer for the day. Refresh to do so.</p>");
                        localStorage.attempts = Number(localStorage.attempts) +1 ;
                      }
                    }
                    else{
                      $( ".main").html("<h1 class='post-title' style='margin-top:5rem;text-align:center'>You aren't allowed to visit this site.</h1><p class='post'>You have 5 attempts to enter the right answer for the day. Refresh to do so.</p>");
                        localStorage.attempts = 1;
                    }
                    

                    
                  }
                  $( ".main").css("visibility","visible");
              }
          }
        else {
              alert("Sorry, please use a modern browser to see this page.");
          }
      }

      $( document ).ready(function() {
        console.log( "Holla!" );
        $('.main').css("visibility","hidden");
        auth();
      });