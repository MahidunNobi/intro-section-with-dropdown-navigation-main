// -------Menu Bar -----------------------
const menuBar = document.getElementById("menubar");
const closeBar = document.getElementById("closeBar")
const mobileMenu = document.getElementById("mobildMnu")

menuBar.addEventListener("click", function(){
    mobileMenu.classList.remove("none")
})
closeBar.addEventListener("click", function(){
    mobileMenu.classList.add("none")
})
// -----------Features Links-----------------

const features = document.getElementById("features");
const downArrow = document.querySelector(".FdownArrow");
const upArrow = document.querySelector(".FupparArrow");
const featureslinks = document.querySelector(".featuresLinkMobile");
const Dexfeatureslinks = document.querySelector(".featuresLink");

function DexfeaturesFunction (){
    if(upArrow.classList.contains("none")){
     downArrow.classList.add("none")
     upArrow.classList.remove("none")
     Dexfeatureslinks.classList.remove("none")
 
    }else if(downArrow.classList.contains("none")){
     downArrow.classList.remove("none")
     upArrow.classList.add("none")
     Dexfeatureslinks.classList.add("none")
    }
 }

function featuresFunction (){
   if(upArrow.classList.contains("none")){
    downArrow.classList.add("none")
    upArrow.classList.remove("none")
    featureslinks.classList.remove("none")

   }else if(downArrow.classList.contains("none")){
    downArrow.classList.remove("none")
    upArrow.classList.add("none")
    featureslinks.classList.add("none")
   }
}
//----------------Company Links-------------
const companyBtn = document.querySelector('#company')
const MdownArrow = document.querySelector('.CdownArrow')
const MupArrow = document.querySelector('.CupparArrow')
const companyLink = document.querySelector('.companyLinkMobile')
const DexcompanyLink = document.querySelector('.companyLink')

function DexcompanyFunction(){
    if(MupArrow.classList.contains("none")){
        MdownArrow.classList.add("none")
        MupArrow.classList.remove("none")
        DexcompanyLink.classList.remove("none")
    
       }else if(MdownArrow.classList.contains("none")){
        MdownArrow.classList.remove("none")
        MupArrow.classList.add("none")
        DexcompanyLink.classList.add("none")
       }
}

function companyFunction(){
    if(MupArrow.classList.contains("none")){
        MdownArrow.classList.add("none")
        MupArrow.classList.remove("none")
        companyLink.classList.remove("none")
    
       }else if(MdownArrow.classList.contains("none")){
        MdownArrow.classList.remove("none")
        MupArrow.classList.add("none")
        companyLink.classList.add("none")
       }
}