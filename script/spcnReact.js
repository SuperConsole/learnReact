/*
    SuperConsole
*/
//第一章
var e =React.createElement;
class content1 extends React.Component{
    render(){
        return(
            <h3>・この文章はReactのコンポーネントです。</h3>
        );
    }
}
ReactDOM.render(
    e(content1),
    document.getElementById('content')
);
