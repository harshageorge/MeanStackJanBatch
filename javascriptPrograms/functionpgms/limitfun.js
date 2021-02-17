var num=18;
var lowlimit=5;
var upplimit=30;
var flag=0;
    if ((num>=lowlimit)&(num<=upplimit))
    {

        for(let i=2;i<num;i++){
            if(num%i==0)
            {
                flag=1;
                break
            }
        }

            if (flag==1){
                console.log("not prime");
                
            }
            else{
                console.log("prime");
                
            }
        }
        else{
            console.log("out of limit");
        }
    
