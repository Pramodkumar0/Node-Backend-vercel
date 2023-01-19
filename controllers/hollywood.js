const HollywoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xdZxN8S6jTtPXrWNkzGvDZtxk4V-ZYeLbQ&usqp=CAU",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov/2022",
            type:"Hollywood"
          },
          {
            id:2,
            img:"https://w7.pngwing.com/pngs/668/326/png-transparent-hollywood-walk-of-fame-hollywood-sign-vip-member-triangle-poster-symmetry-thumbnail.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov/2022",
            type:"Hollywood"
            
          },
          {
              id:3,
              img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNMb58SjIZ4lKAGje0CuwiA9K5qVA9-M-ZQb5bls4oWJhThuTt5IN6cv6A49UPMHV3HE&usqp=CAU",
              title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
              details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Hollywood"
          },
          {
              id:4,
              img:"https://e7.pngegg.com/pngimages/603/809/png-clipart-hollywood-walk-of-fame-celebrity-hollywood-sign-hollywood-sign-photography-film-thumbnail.png",
              title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
              details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Hollywood"
          }
    ])
}
const HollywoodFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://e7.pngegg.com/pngimages/603/809/png-clipart-hollywood-walk-of-fame-celebrity-hollywood-sign-hollywood-sign-photography-film-thumbnail.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
          
          }
    ])
}
const HollywoodTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://w7.pngwing.com/pngs/668/326/png-transparent-hollywood-walk-of-fame-hollywood-sign-vip-member-triangle-poster-symmetry-thumbnail.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
            
          },
          {
            id:2,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xdZxN8S6jTtPXrWNkzGvDZtxk4V-ZYeLbQ&usqp=CAU",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
           
          },
          {
            id:3,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNMb58SjIZ4lKAGje0CuwiA9K5qVA9-M-ZQb5bls4oWJhThuTt5IN6cv6A49UPMHV3HE&usqp=CAU",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
            
          },
          {
            id:4,
            img:"https://e7.pngegg.com/pngimages/603/809/png-clipart-hollywood-walk-of-fame-celebrity-hollywood-sign-hollywood-sign-photography-film-thumbnail.png",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
            
          }
    ])
}
module.exports.getHollywoodData = HollywoodData;
module.exports.getHollywoodFirstData = HollywoodFirstData;
module.exports.getHollywoodTopData = HollywoodTopData;