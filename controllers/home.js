const LatestData = (req, res) => {
  res.send([
    {
      id: 1,
      img: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180801155144/Stone-Chariot-at-Vittala-Temple-Hampi-Karnataka.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Fitness",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Fitness",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLr22dpIIYmWMaFwhJ4lw-DabiX9h-yYzqQnRsJYxVSRSLaz-OBaz8uxgh-JAO2vOOnY&usqp=CAU",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Technology",
    },
    {
      id: 4,
      img: "https://images.indianexpress.com/2022/08/modak-2.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Technology",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmm1X6NM_YvwuOUnEQzl7Y0eu2U3_60ZX5YJni3eNeiylf4tIogKTbMF1EVeaAhYZVWc&usqp=CAU",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Food",
    },
    {
      id: 6,
      img: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180801155144/Stone-Chariot-at-Vittala-Temple-Hampi-Karnataka.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore.",
      date: "Nov/2022",
      type: "Food",
    },
  ]);
};
const LatestArticleData = (req, res) => {
  res.send([
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/512/5367/5367835.png",
      title: "Lorem ipsum dolor sit amet",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore.",
      date: "Nov/2022",
      type: "Hollywood",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/ae/72/08/ae7208a52651ebb5f69b33cb602239f0.jpg",
      title: "Lorem ipsum dolor sit amet",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore.",
      date: "Nov/2022",
      type: "Hollywood",
    },
    {
        id:3,
        img: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180801155144/Stone-Chariot-at-Vittala-Temple-Hampi-Karnataka.jpg",
        title: "Lorem ipsum dolor sit amet",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore.",
        date: "Nov/2022",
        type:"Bollywood",
        num:1
    }    
  ]);
};

module.exports.getLatestData = LatestData;
module.exports.getLatestArticleData = LatestArticleData;
