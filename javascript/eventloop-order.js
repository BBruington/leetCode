function main(){
    console.log('A');
    setTimeout(
        function print(){ console.log('B'); }
        ,0);
    console.log('C');
}
//even with the timeout set to 0, c will be logged before b
main(); // A,C and B