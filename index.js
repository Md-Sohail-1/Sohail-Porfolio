const no_net_container = document.querySelector("#no_net_container");
const contactForm = document.getElementsByTagName("form");
function page_reload (){
  window.location.reload()
}

const loadScript = (src, callback)=>{
 // console.log('hi')
  let script = document.createElement("script");
  script.src = src;
  
  script.onload = () => {
    callback(null,script);
    console.log("script loaded "+ script);
    document.querySelector(".loader").style.display="none";
    document.querySelector("#body").style.display="block"
  //  no_net_container.style.display="none";
  };
  script.onerror = () => callback(new Error("failed"));
    document.body.append(script);
  //  console.log("error found in script")
}

loadScript("https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries",function(error,script){
    if(error){
      console.log("error found in script");
    }
    else{
      console.log(script)
    }
  })
/*
window.onload = function(){
  //console.log("2 hii");

  console.log(window.navigator.onLine)
    document.querySelector(".loader").style.display="none";
    window.navigator.onLine ? (document.querySelector("#body").style.display="block") : (no_net_container.style.display="grid",document.querySelector("#body").style.display="none");
}
*/

console.log(contactForm)
contactForm[0].addEventListener("submit",function(e){
  e.preventDefault();
  document.querySelector("#input_name").value="";
  document.querySelector("#input_number").value="";
  document.querySelector("#input_email").value="";
  document.querySelector("#input_message").value="";
})

