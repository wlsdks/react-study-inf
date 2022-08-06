class App extends React.Component{
 constructor(){
  super();

  //state설정
   this.state = {
    searchKeyword: '',
    searchResult: [],
   };
 }

 handleChangeInput(event){
  // setState를 생성해서 사용해라
  const searchKeyword = event.target.value;

  if(searchKeyword.length <= 0){
    return this.handleReset();
  }

  this.setState({ searchKeyword });
 }
 
 handleSubmit(event){
  event.preventDefault();
  console.log("tood: handleSubmit", this.state.searchKeyword);
 }

 handleReset() {
  // this.setState({ searchKeyword: "" });
  this.setState(() => {
    return { searchKeyword : "" }  
  }, () => {
    console.log('todo: handleReset' , this.state.searchKeyword);
  })
 }
 
  render() {
    let resetButton = null;

    // if(this.state.searchKeyword.length > 0){
    //   resetButton = <button type="reset" cla
    //   ssName="btn-reset"></button>
    // }

    return ( 
      <>
        <header>
          <h2 className="container">검색</h2>
    
        </header>
        <div class="container">
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
          <div className="content">
            {this.state.searchResult.length > 0 ? (
              <div>TODO: 검색 결과 목록 표시하기</div>
            ) : (
              <div className="empty-box">검색 결과가 없습니다.</div>
            )}
          </div>
        </div>
        </> 
    ); 
  }
  }


ReactDOM.render(<App />, document.querySelector("#app"));

