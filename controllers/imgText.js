const LgImgData = (req,res) => {
    res.send([
      {
        img:"https://img.traveltriangle.com/blog/wp-content/uploads/2021/09/Historical-Places-in-the-World1.jpg",
        text:"Lorem ipsum dolor sit amet",
        type:"Lorem ipsum",
        date:"Nov/2022"
      }
    ])
}
const SmImgData = (req,res) => {
    res.send([
    {
        img:"https://hips.hearstapps.com/hbu.h-cdn.co/assets/17/24/1497645698-index-oldest-places.jpg",
        text:"Lorem ipsum dolor sit amet",
        text1:"Lorem ipsum ",
        type:"lorem epsom",
        date:"Nov/2022"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dG-rTEnMkgCnN70BjYmUsO-gYN6iNR9bXqto_z0qIRoatdH7FF-gpQPQzf-OD9uxk_w&usqp=CAU",
        text:"Lorem ipsum dolor sit amet",
        text1:"Lorem ipsum ",
        type:"lorem epsom",
        date:"Nov/2022"
    }
    ])
}

module.exports.getLgImgData = LgImgData;
module.exports.getSmImgData = SmImgData;
