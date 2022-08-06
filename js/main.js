class App extends React.Component{
 constructor(){
  super();

   this.state = {
    searchKeyword: '',
   };
 }

 handleChangeInput(event){
  // this.state.searchKeyword = event.target.value;
  // this.forceUpdate();

  // setState를 생성해서 사용해라
  this.setState({
    searchKeyword: event.target.value
  });
 }
 
 handleSubmit(event){
  event.preventDefault();
  console.log("tood: handleSubmit", this.state.searchKeyword);
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
          <form onSubmit={event => this.handleSubmit(event)}>
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
        </div>
        </> 
    ); 
  }
  }


ReactDOM.render(<App />, document.querySelector("#app"));

