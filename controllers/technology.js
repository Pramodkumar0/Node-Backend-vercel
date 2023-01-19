const TechnologyData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://w7.pngwing.com/pngs/517/481/png-transparent-technology-computer-icons-information-circle-technology-electronics-text-digital-thumbnail.png",
            title:"Lorem ipsum dolor sit amet",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov/2022",
            type:"Technology"
          },
          {
            id:2,
            img:"https://w7.pngwing.com/pngs/745/894/png-transparent-geographic-information-system-information-technology-internet-computer-network-globe-service-thumbnail.png",
            title:"Lorem ipsum dolor sit amet",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov/2022",
            type:"Technology"
            
          },
          {
              id:3,
              img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjd5MbOaV2wOcX12tvpUcqsuFVcMt4RuTmF3UjlIz46_wr9bny7ilOAsl5PljxaLTyD0&usqp=CAU",
              title:"Lorem ipsum dolor sit amet",
              details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Technology"
          },
          {
              id:4,
              img:"https://png.pngtree.com/png-vector/20210609/ourmid/pngtree-information-technology-cloud-computing-computer-hub-png-image_3425778.jpg",
              title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Technology",
              num:1
        }    
    ])
}
const TechnologyFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://png.pngtree.com/png-vector/20210609/ourmid/pngtree-information-technology-cloud-computing-computer-hub-png-image_3425778.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/2022",
            type:"Technology",
          
        }
    ])
}
const TechnologyTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://images.news18.com/ibnlive/uploads/2022/10/untitled-design-2022-10-27t170131.369-16668703753x2.jpg?impolicy=website&width=510&height=356",
            title:"Lorem ipsum dolor sit",
            date:"Nov/2022",
            type:"Technology",
           
          },
          {
            id:2,
            img:"https://png.pngtree.com/png-vector/20210609/ourmid/pngtree-information-technology-cloud-computing-computer-hub-png-image_3425778.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/2022",
            type:"Technology",
            
          },
          {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjd5MbOaV2wOcX12tvpUcqsuFVcMt4RuTmF3UjlIz46_wr9bny7ilOAsl5PljxaLTyD0&usqp=CA",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/2022",
            type:"Technology",
         
          },
          {
            id:4,
            img:"https://w7.pngwing.com/pngs/134/376/png-transparent-wall-decal-sticker-technology-business-technology-electronics-company-text-thumbnail.png",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/2022",
            type:"Technology",
           
          }
    ])
}
module.exports.getTechnologyData = TechnologyData;
module.exports.getTechnologyFirstData = TechnologyFirstData;
module.exports.getTechnologyTopData = TechnologyTopData;