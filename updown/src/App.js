import './App.css';
export default function start(){
  return( 
  <div className="content">
       <header className="header">
           <h1><a herf="">SOPO</a></h1>
       
           <nav className="nav">
               <ul>
                   <li><a herf="mainpage.js">홈</a></li>
                   <li id="MainTitle"><a herf="updownmain.js">선배가 후배에게</a></li>
                   <li><a herf="portfolioMain.js">포트폴리오</a></li>
                   <li><a herf="#">내정보</a></li>
               </ul>
           </nav>
       </header>
       <div className="search-container">
            <input type="text" placeholder="검색" className="search-box" />
            <button className="search-button"><i className="search Writing">검색</i></button>
       </div>
       <div className="post-container">
            <div className="post-written">
                <span className="name">김호준</span><br></br>
                <span className="title">오늘은 나르샤하는날</span><br></br>
                <span className="detail">오늘은 나르샤를 해야하지만 축구를 했다 나는 영원한 축구부❤️</span><br></br>
                <span className="date">2023.09.19</span>
                <span className="img"><img src={require('./Unknown.jpeg')} alt="이미지"></img></span>
            </div>
            <div className="post-written">
                <span className="name">김호준</span><br></br>
                <span className="title">오늘은 나르샤하는날</span><br></br>
                <span className="detail">오늘은 나르샤를 해야하지만 축구를 했다 나는 영원한 축구부❤️</span><br></br>
                <span className="date">2023.09.19</span>
                <span className="img"><img src={require('./Unknown.jpeg')} alt="이미지"></img></span>
            </div>
            <div className="post-written">
                <span className="name">김호준</span><br></br>
                <span className="title">오늘은 나르샤하는날</span><br></br>
                <span className="detail">오늘은 나르샤를 해야하지만 축구를 했다 나는 영원한 축구부❤️</span><br></br>
                <span className="date">2023.09.19</span>
                <span className="img"><img src={require('./Unknown.jpeg')} alt="이미지"></img></span>
            </div>
       </div>
  </div>
  )
}