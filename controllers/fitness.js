const FitnessData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://static.toiimg.com/thumb/msid-77884092,width-1200,height-900,resizemode-4/.jpg",
            title:"Lorem ipsum dolor sit amet",
            details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov/2022",
            type:"Fitness"
        },
        {
          id:2,
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwotk_-VaAj9pmo38lbYI_TVmNXAKnM73q1A-KXZ5VI3WhB2sFaUKl095zKXGI9xk2S8&usqp=CAU",
          title:"Lorem ipsum dolor sit amet",
          details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
          date:"Nov/2022",
          type:"Fitness",
         
      },
        {
          id:3,
          img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7W3Ff4Bi3M5stOL6tSAKZMcLIeVi9vuPsTcbLuVYvQSXibIN8dQAiwJWMk_XfSw-caJc&usqp=CAU",
          title:"Lorem ipsum dolor sit amet",
          details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
          date:"Nov/2022",
          type:"Fitness"
        },
        {
          id:4,
          img:"https://static.toiimg.com/thumb/msid-77884092,width-1200,height-900,resizemode-4/.jpg",
          title:"Lorem ipsum dolor sit amet",
          details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
          date:"Nov/2022",
          type:"Fitness"
          
        }
    ])
}
const FitnessFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7W3Ff4Bi3M5stOL6tSAKZMcLIeVi9vuPsTcbLuVYvQSXibIN8dQAiwJWMk_XfSw-caJc&usqp=CAU",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
        }
    ])
}
const FitnessTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwotk_-VaAj9pmo38lbYI_TVmNXAKnM73q1A-KXZ5VI3WhB2sFaUKl095zKXGI9xk2S8&usqp=CAU",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
            
          },
          {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7W3Ff4Bi3M5stOL6tSAKZMcLIeVi9vuPsTcbLuVYvQSXibIN8dQAiwJWMk_XfSw-caJc&usqp=CAU",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
           
          },
          {
            id:3,
            img:"https://static.toiimg.com/thumb/msid-77884092,width-1200,height-900,resizemode-4/.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
           
          },
          {
            id:4,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7W3Ff4Bi3M5stOL6tSAKZMcLIeVi9vuPsTcbLuVYvQSXibIN8dQAiwJWMk_XfSw-caJc&usqp=CAU",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
          }
    ])
}
module.exports.getFitnessData = FitnessData;
module.exports.getFitnessFirstData = FitnessFirstData;
module.exports.getFitnessTopData = FitnessTopData; 