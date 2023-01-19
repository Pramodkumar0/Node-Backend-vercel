const BollywoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio totam dignissimos consectetur! Eum, est. Iste explicabo, reprehenderit vitae nihil minus excepturi aliquid vel itaque laboriosam magnam quod. Provident accusantium dolores quibusdam repudiandae!",
            date:"Nov/2022",
            type:"Bollywood"
          },
          {
            id:2,
            img:"https://www.shutterstock.com/image-vector/bollywood-indian-cinema-movie-banner-260nw-1233854965.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov2022",
            type:"Bollywood"
            
          },
          {
              id:3,
              img:"https://thumbs.dreamstime.com/b/bollywood-female-hands-holding-movie-clapper-bollywood-female-hands-holding-movie-clapper-white-background-102190064.jpg",
              title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Bollywood"
          },
          {
              id:4,
              img:"https://media.istockphoto.com/id/1137344367/vector/bollywood-indian-cinema-film-frame.jpg?s=612x612&w=0&k=20&c=WwueZj31n6U5v-3uKioncsdVSCnuWhSmvHPax8sBhKE=",
              title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Bollywood",
             
          }    
    ])
}
const BollywoodFirstData = (req,res) => {
    res.send([
      {
        id:1,
        img:"https://media.istockphoto.com/id/1137344367/vector/bollywood-indian-cinema-film-frame.jpg?s=612x612&w=0&k=20&c=WwueZj31n6U5v-3uKioncsdVSCnuWhSmvHPax8sBhKE=",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate impedit deleniti voluptate itaque perspiciatis distinctio",
        date:"Nov 13, 2022",
        type:"Bollywood",
        
      }
    ])
}
const BollywoodTopData = (req,res) => {
    res.send([
      {
        id:1,
        img:"https://images.hindustantimes.com/img/2022/11/13/550x309/Akshay-Kumar_1668328026802_1668328027071_1668328027071.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"Nov 13, 2022",
        type:"Bollywood",
       
      },
      {
        id:2,
        img:"https://thumbs.dreamstime.com/b/bollywood-female-hands-holding-movie-clapper-bollywood-female-hands-holding-movie-clapper-white-background-102190064.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"Nov 13, 2022",
        type:"Bollywood",
        
      },
      {
        id:3,
        img:"https://www.shutterstock.com/image-vector/bollywood-indian-cinema-movie-banner-260nw-1233854965.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"Nov 12, 2022",
        type:"Bollywood",
       
      },
      {
        id:4,
        img:"https://images.hindustantimes.com/img/2022/11/21/550x309/aaradhya_birthday_party_1669011025847_1669011026027_1669011026027.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"Nov 12, 2022",
        type:"Bollywood",
     
      }
    ])
}
module.exports.getBollywoodData = BollywoodData;
module.exports.getBollywoodFirstData = BollywoodFirstData;
module.exports.getBollywoodTopData = BollywoodTopData;