import { gsap } from "gsap"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from('nav .logo, .nav-items li, .login-part h4, .login-part button', {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5
    })

    tl.from(".txt-content h1, .txt-content h2, .txt-content h3", {
      y: 100,
      opacity: 0,
      stagger: 0.3
    })

    tl.from('.img1 img, .img4 img', {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.3
    })

    tl.from('.scroll-down', {
      opacity: 0,
      scale: 0
    })

    tl.to('.scroll-down', {
      y: 40,
      repeat: -1,
      yoyo: true,
      duration: 1.5
    })
  }, [])
  return (
    <div>
      <div id="main">
        <nav>
          <div className="logo">
            <img src="data:image/png;base64,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" alt="" />
          </div>
          <div className="nav-items">
            <ul>
              <li><a href="#">Product</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Resources</a></li>
            </ul>
          </div>
          <div className="login-part">
            <h4>Log In</h4>
            <button>GET STARTED</button>
          </div>
        </nav>

        <div className="txt-content">
          <h1>Everything</h1>
          <h2>To <a href="#">Book Now</a> sell</h2>
          <h3>Anything</h3>
        </div>
        <div className="img1">
          <img src="https://images.unsplash.com/photo-1598495494482-172d89ff078c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=682&q=80" alt="" />
        </div>
        <div className="img4">
          <img src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=690&q=80" alt="" />
        </div>
        <h5 className="scroll-down">
          scroll down <span>↓</span>
        </h5>
      </div>
    </div>
  )
}
