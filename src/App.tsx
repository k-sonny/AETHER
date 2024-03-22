import './App.css'
import abc from "./imgfile/img1.png"
import logo from "./imgfile/logo.png"



function App() {


  return (
    <div className="bg-white text-black">
      <header className="bg-white p-4 text-black " >
        <div className="flex justify-between items-center max-w-5xl mx-auto">
          <div className="flex items-center space-x-6" >
            <img src={logo} width="30" height="30" />
            <line x1="4" x2="4" y1="22" y2="15"> AETHER</line>
            <nav className="flex space-x-4">
              <a className="hover:underline text-black" href="#">
                회사 소개
              </a>
              <a className="hover:underline text-black" href="#">
                솔루션
              </a>
              <a className="hover:underline text-black" href="#">
                리소스
              </a>
            </nav>
          </div>
          <form className='button-form'>
            <button className="Loginbutton">로그인</button>
            <button className="myButton1">상담요청</button>
          </form>
        </div>
      </header>
      <main>
        <section style={{ paddingTop: "15rem" }}>
          <h1 className="title" >
            최초 순수 국내 기술로 만든 <br></br><span className="gradient-text">코딩 학습 도구</span>
          </h1>
          <button className="myButton">상담 요청하기</button>
        </section>
        <section className="mb-12" style={{ paddingTop: "17rem" }}>
          <h2 className="Company_introduction">아이테르</h2>
          <h1 className="Company_introduction_title" >회사 소개 </h1>
          <p className="Company_introduction_description">
            AETHER는 순수 국내 기술로 만든 국내 최초의 코딩학습도구로
            <br></br>
            진입장벽이 높은 프로그래밍 언어를 직관적인 인터페이스를 통해 풀이함으로써
            <br></br>
            처음 개발을 배우는 아이부터 현직에서 근무하는 디자이너, 관리자, 기획자까지 빠르고 쉽게 배울 수 있습니다.
          </p>
          <p className="Company_introduction_description">
            코딩 시장에서 주도적 역할을 수행하는 솔루션 기술을 활용, <br />
            코딩 교육을 기반으로 하는 다양한 사업들의 발전을 염두에 둔 설계로 제공해 나가겠습니다
          </p>
        </section>
        <section className="self_made" style={{ paddingTop: "12rem" }}>
          <div>
            <img src={abc} alt="스스로 만드는 SW UI IMAGE" style={{ height: "300px", borderRadius: "20px" }} />
          </div>
          <div>
            <button className="self_made_div" >스토리 만드는 SW UI</button>
            <p className="self_made_description">
              UI 최소 구성요소인 컴포넌트를 라는 개념을 없애고
              <br></br>모든 도구를 랜더링-파이프라인으로 구성하여
              <br></br>매 프레임시 화면을 그리는 방법을 직접 기술하는 UI 에디터입니다.
              <br></br>그림도구를 가지고 그림을 그려버리기 때문에 UI 스타일을 100% 만족
            </p>
          </div>
        </section>
        <section className="operating_system" style={{ paddingTop: "12rem" }}>
          <div>
            <img src={abc} alt="스스로 만드는 SW UI IMAGE" style={{ height: "300px", borderRadius: "20px" }} />

          </div>
          <div>
            <div className="operating_system_div" >운영체제의 통일</div>
            <p className="operating_system_description">
              OS 별 차이를 없앴습니다   
              <br></br>
              모든 OS에 TTF만을 사용함으로서 OS의 화면정책을 뛰어넘었습니다 <span>&nbsp;&nbsp;</span> {/* 공백 추가 */} 
              <br></br>파이프라인을 통해 자기만의 화면배율 정책을 정할수 있습니다

            </p>
          </div>
        </section>
        <section className="Designer" style={{ paddingTop: "12rem" ,paddingBottom : "12rem"}}>
          <div>
            <img src={abc} alt="스스로 만드는 SW UI IMAGE" style={{ height: "300px", borderRadius: "20px"  }} />
          </div>
          <div>
            <button className="Designer_div" >디자이너만으로 충분</button>
            <p className="Designer_description">
              UI작업대상인 SW를 화면에 실행해놓고
              <br></br>에디팅을 하여 실시간으로 적용모습을 확인하며 작업할수 있기에 <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> 
              <br></br>디자이너의손에서 시작해 디자이너의 손에서 끝날 수 있습니다.
            </p>
          </div>
        </section>
      </main>
    </div>

  )
}

export default App
