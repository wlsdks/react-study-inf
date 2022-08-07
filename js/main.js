import store from "./js/store.js";
import storage from "./js/storage.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY"
}

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
}

class App extends React.Component{
 constructor(){
  super();

  //state설정
   this.state = {
      searchKeyword: '',
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
      keywordList: [],
   };
 }

 handleChangeInput(event){
  // setState를 생성해서 사용해라
  const searchKeyword = event.target.value;

  if(searchKeyword.length <= 0 && this.state.submitted){
    return this.handleReset();
  }

  this.setState({ searchKeyword });
 }

 componentDidMount(){
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
 }
 
 handleSubmit(event){
  event.preventDefault();
  console.log("tood: handleSubmit", this.state.searchKeyword);
  this.search(this.state.searchKeyword)
 }

 handleReset() {
  this.setState({
    searchKeyword: "",
    submitted: false,
  })
    
 }

 search(searchKeyword){
  const searchResult = store.search(searchKeyword);
  this.setState({ 
    searchKeyword,
    searchResult,
    submitted: true
   });
 }
 
 
  render() {
    const searchForm = (
      <form 
            onSubmit = {event => this.handleSubmit(event)}
            onReset = {() => this.handleReset()}
          >
            <input 
              type="text" 
              placeholder="검색어를 입력하세요." 
              autoFocus 
              value={this.state.searchKeyword}
              onChange={event => this.handleChangeInput(event)}
            />
            {this.state.searchKeyword.length > 0  && (
              <button type="reset" className="btn-reset"></button>
            )}
      </form>
    );

    const keywordList = (
        <ul className="list">
            {this.state.keywordList.map(({id, keyword}, index) => (
                <li key={id} onClick={() => this.search(keyword)}>
                    <span className="number">{index + 1}</span>
                    <span>{keyword}</span>
                </li>
            ))}
        </ul>
    )

    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => (
            <li 
              className={this.state.selectedTab === tabType ? "active" : ""}
              key = {tabType}            
              onClick = {() => this.setState({ selectedTab: tabType })}
            >
              {TabLabel[tabType]}
            </li>
          ))}
        </ul>

        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HISTORY && <>TODO: 최근 검색어</>}
      </>
    )

    const searchResult = (
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map(item => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="empty-box">검색 결과가 없습니다.</div>
      )
    );

    return ( 
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div class="container">
          {searchForm}
          <div className="content">
            {this.state.submitted ? searchResult : tabs}
          </div>
        </div>
      </> 
    ); 
  }
  }

ReactDOM.render(<App />, document.querySelector("#app"));

