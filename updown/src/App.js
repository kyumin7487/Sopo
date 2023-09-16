import './App.css';

export default function start(){
  return( 
  <div className="content">
       <header className="header">
           <h1><a herf="">SOPO</a></h1>
       
           <nav className="nav">
               <ul>
                   <li><a herf="#">홈</a></li>
                   <li id="MainTitle"><a herf="UPandDownMain.js">선배가 후배에게</a></li>
                   <li><a herf="#">포트폴리오</a></li>
                   <li><a herf="#">내정보</a></li>
               </ul>
           </nav>
       </header>
       <div className="search-container">
            <input type="text" placeholder="검색" className="search-box" />
            <button className="search-button"><i className="search Writing">검색</i></button>
       </div>
  </div>
  
  
  )
}