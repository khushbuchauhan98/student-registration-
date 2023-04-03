let users=[]
let random=['vadodara','surat','navsari','ahmedabad','anand','nadiad','bharuch']
function render()
{
   
    let parent=document.getElementById('right')
    parent.innerHTML=''
    users.map((x)=>{
        let div=document.createElement('div')
        let p= document.createElement('p')
        let p2 = document.createElement('p')
        let p3= document.createElement('p');
        div.classList.add('user')
        p.innerText=x.name
        p2.innerText=x.email
        p3.innerText=x.center
        parent.appendChild(div)
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(p3)
       
    })
    let rights= document.getElementById('r')
    // rights.style.display='block';
}
function submit(){
    let name= document.getElementById('name')
    let email= document.getElementById('email')
    let tempuser={
        name:name.value,
        email:email.value,
        center: random[(Math.floor(Math.random()*(random.length)))]
    }
    let emailchecl=users.filter((x)=>{
        // console.log(x.email)
     return  x.email == email.value
     
    })
    if(email.value==''){
        alert('input field is blanck')
        name.value=""
    }
    else if( name.value==''){
        alert('input field is blanck')
        email.value=""
    }
    else if(emailchecl.length == 0 )
    {
        users.push(tempuser)
        console.log(users)
        email.value=""
        name.value=""
    }
    else{
        alert('same email exist')
    }
   render()
    // let ab= document.getElementById('user')
    // ab.classList.add('user')
}
function sub(){
    let email= document.getElementById('email')
    console.log(email.value)
}