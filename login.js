document.getElementById('login-btn').addEventListener('click', function(){
    const accountNo= document.getElementById('input-box').value 
    
    
    if ( accountNo == 12345){
        
        window.location.href = 'jbanking.html'
    }
})

