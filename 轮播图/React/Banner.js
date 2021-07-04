import React from "react"
import "./banner.css"

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    let { imgUrl, speed, step, width, height, autoplay } = this.props
    // 克隆数组
    let imgUrlClone = []
    imgUrlClone = imgUrlClone.concat([].concat(imgUrl))
    // A B C D E
    imgUrlClone.push(imgUrl[0])
    // A B C D E A
    imgUrlClone.unshift(imgUrl[imgUrl.length - 1])
    // E A B C D E A

    this.imgUrlClone = imgUrlClone
    this.state = {
      speed,
      step,
      width,
      height
    }
    if (autoplay) {
      this.timer = setInterval(() => {
        this.next()
      }, this.props.interval);
    }
  }

  removeInte = () => {
    clearInterval(this.timer)
  }

  addInter = () => {
    if (!this.props.autoplay) return
    this.timer = setInterval(() => {
      this.next()
    }, this.props.interval);
  }

  prev = () => {
    let { step } = this.state
    if (step <= 0) {
      this.setState({
        step: this.imgUrlClone.length - 2,
        speed: 0
      })
    }
    setTimeout(() => {
      this.setState({
        step: this.state.step - 1,
        speed: this.props.speed
      })
    }, 0)
  }

  next = () => {
    let { step } = this.state
    if (step >= this.imgUrlClone.length - 1) {
      this.setState({
        step: 1,
        speed: 0
      })
    }
    setTimeout(() => {
      this.setState({
        step: this.state.step + 1,
        speed: this.props.speed
      })
    }, 0)
  }

  render() {
    let { width, height, step, speed } = this.state

    let swiperBoxSty = {
      width: `${this.imgUrlClone.length * width}px`,
      left: `${-step * width}px`,
      height: height + "px",
      transition: `all ${speed}ms linear`
    }

    this.swiperBoxSty = swiperBoxSty
    let commom = {
      width: width + "px",
      height: height + "px"
    }
    return (
      <div
        className="container"
        style={commom}
        onMouseEnter={this.removeInte}
        onMouseLeave={this.addInter}
      >
        <div className="swiper-box" style={swiperBoxSty}>
          {
            this.imgUrlClone.map((item, index) => {
              return (
                <div className="swiper-item" key={index}>
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </div>

        <div className="swiper-arrow">
          <div className="arrowLeft iconfont iconqianjin1" onClick={this.prev}></div>
          <div className="arrowRight iconfont iconqianjin" onClick={this.next}></div>
        </div>

        <div className="focus">
          {
            this.props.imgUrl.map((item, index) => {
              if (step === this.imgUrlClone.length - 1) {
                step = 1
              }
              if (step === 0) {
                step = this.imgUrlClone.length - 2
              }
              return (
                <div className={index + 1 === step ? "active" : ""} key={index}></div>
              )
            })
          }
        </div>
      </div>
    )
  }
}