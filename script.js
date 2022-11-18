let globalImageState = {
    currentImageState: 0
}

const nextBtn = document.getElementsByClassName("carousel__button--right")
const prevBtn = document.getElementsByClassName("carousel__button--left")

const carousel = [
    {
        image:"./assets/image_1.jpg",
        imageName: "First Image"
    },
    {
        image:"./assets/image_2.jpg",
        imageName: "Second Image"
    },
    {
        image:"./assets/image_3.jpg",
        imageName: "Third Image"
    },
    {
        image:"./assets/image_4.jpg",
        imageName: "Fourth Image"
    },
    {
        image:"./assets/image_5.jpg",
        imageName: "Fifth Image"
    },
    {
        image:"./assets/image_6.jpg",
        imageName: "Sixth Image"
    }
]

const moveToNextImage = ()=>{
    let currentImageState = globalImageState.currentImageState
    if(currentImageState >= carousel.length - 1){
     globalImageState.currentImageState = 0  
    }else{
    globalImageState.currentImageState = currentImageState + 1
    }

}

const moveToPreviousImage = ()=>{
    let currentImageState = globalImageState.currentImageState

if(currentImageState <= 0){
    globalImageState.currentImageState = carousel.length -1 
}else{
    globalImageState.currentImageState = currentImageState - 1
}

}
 

const next = ()=>{
moveToNextImage()
let nextCarousel = carousel[globalImageState.currentImageState]

myCurrentCarousel(nextCarousel?nextCarousel:carousel[0])


}

const prev = ()=>{
moveToPreviousImage()
let prevCarousel = carousel[globalImageState.currentImageState]
myCurrentCarousel(prevCarousel?prevCarousel:carousel[carousel.length - 1])
}

const myCurrentCarousel = (nextStateObj)=>{
let imageDom = document.getElementById('carousel_image')
imageDom.src = nextStateObj.image

// console.log(globalImageState.currentImageState)

}