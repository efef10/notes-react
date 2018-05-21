import * as React from 'react';
import '../App.css';
// import Note from '../components/Note';
import Notes from './Notes';
import Textarea from '../components/Textarea';


interface IAppState {
    content:string
    // currentNote:string
}

class App extends React.Component<{},IAppState> {

    constructor(props:{}){
        super(props)
        this.state =
            {content:'',
             // currentNote:""
            };
    }



    public textChange = (e:any) =>{
        this.setState({content:e.target.value});

    }

    public clicked = (content:string)=>{
        this.setState({content:content});
    }

    public render() {
        return (
                <div className="App">
                    <Notes clicked={this.clicked} data={this.state.content}/>
                    <Textarea data={this.state.content} onEdit={this.textChange}/>
                </div>
        );
    }
}

export default App;
