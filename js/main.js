import store from "./js/store.js";

class App extends React.Component{
 constructor(){
  super();

  //state설정
   this.state = {
    searchKeyword: '',
    searchResult: [],
    submitted : false,
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
  this.search(this.state.searchKeyword)
 }

 handleReset() {
  // this.setState({ searchKeyword: "" });
  this.setState(() => {
    return { searchKeyword : "" }  
  }, () => {
    console.log('todo: handleReset' , this.state.searchKeyword);
  })
 }

 search(searchKeyword){
  const searchResult = store.search(searchKeyword);
  this.setState({ 
    searchResult,
    submitted: true
   });
 }
 
  render() {
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
            {this.state.submitted && (
              (this.state.searchResult.length > 0 ? (
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
              ))
            )}
          </div>
        </div>
        </> 
    ); 
  }
  }

ReactDOM.render(<App />, document.querySelector("#app"));

