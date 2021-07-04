import Banner from './banner'

let imgUrl = [
  'https://img.zcool.cn/community/010c815e25a8c4a801216518dcc1d4.jpg@1280w_1l_2o_100sh.jpg', 'https://img.zcool.cn/community/0189905e25a8c6a80120a89533cc7f.jpg@1280w_1l_2o_100sh.jpg', 'https://img.zcool.cn/community/01747f5e25a8c9a801216518193452.jpg@1280w_1l_2o_100sh.jpg', 'https://img.zcool.cn/community/01cbba5e25a8cea80120a895743281.jpg@1280w_1l_2o_100sh.jpg', 'https://img.zcool.cn/community/0186025e25a8d3a80121651827af9c.jpg@1280w_1l_2o_100sh.jpg'
]

function App() {
  return (
    <div>
      <Banner
        imgUrl={imgUrl}
        speed={500}
        step={1}
        width={1170}
        height={400}
        interval={2000}
        autoplay={true}
      />
    </div>
  );
}

export default App;