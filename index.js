

const searchclicked = document.querySelector('.buttonsearch') ;
const userinput = document.querySelector('.search') ;
const searchbox = document.querySelector('.search') ;
const recipiecontainer = document.querySelector('.recipiecontainer') ;
const signinbtn = document.querySelector('.signin') ;
const closebtn = document.querySelector('.close') ;
const resetbtn = document.querySelector('.reset') ;
const submitbtn = document.querySelector('.submit') ;
const container = document.querySelector('.container') ;




const getResult = async function(command){
    recipiecontainer.innerHTML = "Fetching Recipies..." ;
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${command}`) ;
    const result = await data.json() ;

    // dusre searchj ke liye reset ....
    recipiecontainer.innerHTML = "" ;
    result.meals.forEach(items => {
        
        console.log(items)
        const recipiediv = document.createElement('div') ;
       
        recipiediv.classList.add('recipie') ;
        recipiediv.innerHTML = `
            <img src =" ${items.strMealThumb}" >
            <h2 style = "color: aliceblue">${items.strMeal}</h2>
            <p>It belongs to <span style = "color : aliceblue">${items.strCategory}</span> category</p>
            <p><span style = "color : aliceblue">${items.strArea}</span> dish</p>
        `

        recipiecontainer.appendChild(recipiediv) ;
 
    });
   
}



searchclicked.addEventListener('click' , function(e){
    e.preventDefault() ;
    const userinput = searchbox.value.trim() ;
    getResult(userinput) ;
    
}) ;    

signinbtn.addEventListener('click' , (e) => {
    e.preventDefault()
    let pointer = document.querySelector('.signup') ;
    container.style.filter = 'blur(12px)' ;
    pointer.style.display = 'block' ;
    
})


closebtn.addEventListener('click' , (e) => {
    e.preventDefault()
    let pointer = document.querySelector('.signup') ;
    container.style.filter = 'blur(0px)' ;
    pointer.style.display = 'none' ;
})

resetbtn.addEventListener('click' , (e) => {
    e.preventDefault() ;
    const username  = document.querySelector('.username') ;
    const password = document.querySelector('.password') ;
    username.value = '' ;
    password.value= '' ;  

})

submitbtn.addEventListener('click' , () => {
    alert("You are successfully logged in !")
})



