var num=3,lowlimit=8,upplimit=25;
var y=0;
for(let i=1;i<=upplimit;i++)
{
    var y=i**num;
    if((y>=lowlimit)&(y<=upplimit))
    {
        console.log(y);
    }
}
