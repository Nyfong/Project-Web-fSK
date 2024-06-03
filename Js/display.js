const DisplayList =[
    {
        pic:"https://png.pngtree.com/png-vector/20240207/ourmid/pngtree-indoor-plant-flowerpot-png-image_11669796.png",
        name:"Tropical Plant with Green Leaves ",
        price:"33.9$"
    },
    {
        pic:"https://hortology.co.uk/cdn/shop/files/Ficus-elastica-Robusta-Rubber-Plant-24x80cm-Lisbon-Plant-Pot-Anthracite-26x26cm_15863bd8-1d64-4b63-a016-9ec33053b16b_1600x.jpg?v=1687429902",
        name:"Ficus elastica Robusta - Rubber Plant Indoor Plants",
        price:"21.0$"
    },
    {
        pic:"https://imgix.be.green/63640479d5c27125542305.jpg",
        name:"Ficus elastica tineke XL ",
        price:"43.9$"
    },
    {
        pic:"https://palmcentre.co.uk/wp-content/uploads/2023/08/F_16395_603c118c1d3fd.jpg",
        name:"Ficus elastica 'Robusta' - Indian rubber tree",
        price:"91.9$"
    },   
    {
        pic:"https://i.pinimg.com/736x/58/9d/4a/589d4a02eccbee79513e0d19d36d088c.jpg",
        name:"Tropical Plant with Green Leaves ",
        price:"33.9$"
    },
    {
        pic:"https://hortology.co.uk/cdn/shop/files/Ficus-elastica-Robusta-Rubber-Plant-24x80cm-Lisbon-Plant-Pot-Anthracite-26x26cm_15863bd8-1d64-4b63-a016-9ec33053b16b_1600x.jpg?v=1687429902",
        name:"Ficus elastica Robusta - Rubber Plant Indoor Plants",
        price:"21.0$"
    },
    {
        pic:"https://imgix.be.green/63640479d5c27125542305.jpg",
        name:"Ficus elastica tineke XL ",
        price:"43.9$"
    },
    {
        pic:"https://palmcentre.co.uk/wp-content/uploads/2023/08/F_16395_603c118c1d3fd.jpg",
        name:"Ficus elastica 'Robusta' - Indian rubber tree",
        price:"91.9$"
    }, 
    {
        pic:"https://hortology.co.uk/cdn/shop/files/Ficus-elastica-Robusta-Rubber-Plant-24x80cm-Lisbon-Plant-Pot-Anthracite-26x26cm_15863bd8-1d64-4b63-a016-9ec33053b16b_1600x.jpg?v=1687429902",
        name:"Ficus elastica Robusta - Rubber Plant Indoor Plants",
        price:"21.0$"
    },
    {
        pic:"https://imgix.be.green/63640479d5c27125542305.jpg",
        name:"Ficus elastica tineke XL ",
        price:"43.9$"
    },
    {
        pic:"https://palmcentre.co.uk/wp-content/uploads/2023/08/F_16395_603c118c1d3fd.jpg",
        name:"Ficus elastica 'Robusta' - Indian rubber tree",
        price:"91.9$"
    }, 
    {
        pic:"https://hortology.co.uk/cdn/shop/files/Ficus-elastica-Robusta-Rubber-Plant-24x80cm-Lisbon-Plant-Pot-Anthracite-26x26cm_15863bd8-1d64-4b63-a016-9ec33053b16b_1600x.jpg?v=1687429902",
        name:"Ficus elastica Robusta - Rubber Plant Indoor Plants",
        price:"21.0$"
    },
    {
        pic:"https://imgix.be.green/63640479d5c27125542305.jpg",
        name:"Ficus elastica tineke XL ",
        price:"43.9$"
    },
    {
        pic:"https://palmcentre.co.uk/wp-content/uploads/2023/08/F_16395_603c118c1d3fd.jpg",
        name:"Ficus elastica 'Robusta' - Indian rubber tree",
        price:"91.9$"
    }, 
    {
        pic:"https://imgix.be.green/63640479d5c27125542305.jpg",
        name:"Ficus elastica tineke XL ",
        price:"43.9$"
    },
    {
        pic:"https://palmcentre.co.uk/wp-content/uploads/2023/08/F_16395_603c118c1d3fd.jpg",
        name:"Ficus elastica 'Robusta' - Indian rubber tree",
        price:"91.9$"
    }, 
    {
        pic:"https://imgix.be.green/63640479d5c27125542305.jpg",
        name:"Ficus elastica tineke XL ",
        price:"43.9$"
    },
    {
        pic:"https://palmcentre.co.uk/wp-content/uploads/2023/08/F_16395_603c118c1d3fd.jpg",
        name:"Ficus elastica 'Robusta' - Indian rubber tree",
        price:"91.9$"
    }, 
    {
        pic:"https://imgix.be.green/63640479d5c27125542305.jpg",
        name:"Ficus elastica tineke XL ",
        price:"43.9$"
    },
    {
        pic:"https://palmcentre.co.uk/wp-content/uploads/2023/08/F_16395_603c118c1d3fd.jpg",
        name:"Ficus elastica 'Robusta' - Indian rubber tree",
        price:"91.9$"
    }, 
];

const display = () =>{
    x =0
    let txt="";
    while(x<10)
    {
        txt+=`
<a href="../dist/detail.html">    
    <div class="col w-[300px] border-2 border-green-400 rounded-xl bg-slate-50 overflow-hidden">
        <div class="card w-full relative">
             <div class="heart-tapped absolute top-[10px] left-[10px]
                 bg-pink-300 w-[30px] h-[30px] rounded-full
                flex items-center justify-center
                ">
                <i class="fa-regular fa-heart text-white"></i>
            </div>
            <img src="https://i.pinimg.com/736x/58/9d/4a/589d4a02eccbee79513e0d19d36d088c.jpg" alt="">
            <div class="card-details  flex flex-col  justify-between gap-3 h-[50px]  w-full p-2">
                <div class="name">
                    <p>Pka Ey jg tov </p>
                </div>
                <div class="star text-yellow-300 flex">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <div class="card-details flex  justify-between items-center w-full 0 p-2 ">
                <p>253 EU</p>
                <div class="Addtocart flex  w-[100px] h-[50px]  p-2 items-center  justify-between rounded-xl bg-white overflow-hidden  hvr-sweep-to-right " >
                <i class="fa-solid fa-basket-shopping"></i>
                <p class=" text-[10px] flex items-center justify-center"> Add to Cart</p>
                </div>
            </div>
        </div>
    </div>
</a>    `
        x+=1;
    }
    document.querySelector(".content-1").children[0].innerHTML =txt;
}
// display();

const Display_Array = () =>{
    let txt="";
    DisplayList.forEach((el)=>{
    txt+=`

<div class="col w-[290px] border-2 border-green-400 rounded-xl bg-slate-50 relative  overflow-hidden">
                <div class="heart-tapped absolute top-[10px] right-[10px]
                    bg-pink-300 w-[30px] h-[30px] rounded-full
                    flex items-center justify-center z-[500]
                    " id="heart-1" >
                <i class="fa-regular fa-heart text-white"></i>
            </div>
    <a href="../dist/detail.html">
    <div class="card w-full relative overflow-hidden">
        
        <div class="w-full h-[300px]">
            <img src="${el.pic}" 
            class="w-full h-full transition duration-300 ease-in-out"
            alt="">
        </div>
       
        <div class="card-details  flex flex-col  justify-between gap-3 h-[100px]  w-full p-2">
            <div class="name">
                <p>${el.name} </p>
            </div>
            <div class="star text-yellow-300 flex">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="card-details flex  justify-between items-center w-full 0 p-2 ">
            <p>${el.price}</p>
            <div class="Addtocart flex  w-[100px] h-[50px]  p-2 items-center  justify-between rounded-xl bg-white overflow-hidden  hvr-sweep-to-right "  id="addtocart">
            <i class="fa-solid fa-basket-shopping"></i>
            <p class=" text-[10px] flex items-center justify-center" > Add to Cart</p>
            </div>
        </div>
    </div>
    </a>
</div>

`;
    });
    document.querySelector(".content-1").children[1].innerHTML =txt;
}
Display_Array()