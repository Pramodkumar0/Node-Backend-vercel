const FoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutCSyjFdUoeKkZ6KSDXptzhdggdViByGDSKDnDILj&s",
            title:"Lorem ipsum dolor sit amet, consectetur",
            details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov 12, 2022",
            type:"Food"
          },
          {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHd9_Czxx9t0-osJjMtU3Rg7__uoMJFXS92Y3BRLy&s",
            title:"Lorem ipsum dolor sit amet, consectetur",
            details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov 12, 2022",
            type:"Food"
            
          },
          {
              id:3,
              img:"https://e7.pngegg.com/pngimages/870/155/png-clipart-junk-food-kosher-foods-pizza-fast-food-samosa-junk-food-food-recipe.png",
              title:"Lorem ipsum dolor sit amet, consectetur",
              details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov 12, 2022",
              type:"Food"
          },
          {
              id:4,
              img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRON7rGISU6ymggGG_g2B8LGBtynC4x_KCcFPEouY-N&s",
              title:"Lorem ipsum dolor sit amet, consectetur",
              details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov 12, 2022",
              type:"Food",
            
          }    
    ])
}
const FoodFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://static.toiimg.com/thumb/95650985.cms?width=680&height=512&imgsize=72808",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov 13, 2022",
            type:"Food",
           
        }
    ])
}
const FoodTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHd9_Czxx9t0-osJjMtU3Rg7__uoMJFXS92Y3BRLy&s",
            title:"Lorem ipsum dolor sit",
            date:"Nov 13, 2022",
            type:"Food",
            
          },
          {
            id:2,
            img:"https://e7.pngegg.com/pngimages/870/155/png-clipart-junk-food-kosher-foods-pizza-fast-food-samosa-junk-food-food-recipe.png",
            title:"Lorem ipsum dolor sit",
            date:"Nov 13, 2022",
            type:"Food",
            
          },
          {
            id:3,
            img:"https://static.toiimg.com/thumb/95536253.cms?width=680&height=512&imgsize=80446",
            title:"Lorem ipsum dolor sit",
            date:"Nov 12, 2022",
            type:"Food",
            
          },
          {
            id:4,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRON7rGISU6ymggGG_g2B8LGBtynC4x_KCcFPEouY-N&s",
            title:"Lorem ipsum dolor sit",
            date:"Nov 12, 2022",
            type:"Food",
           
          }
    ])
}
module.exports.getFoodData = FoodData;
module.exports.getFoodFirstData = FoodFirstData;
module.exports.getFoodTopData = FoodTopData;