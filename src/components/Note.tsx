import * as React from 'react';

 interface INoteProps {
     note:string
     content:string
     clicked(content:string):void
 }

 interface INoteState {
     content:string
 }

class Note extends React.Component<INoteProps,INoteState>{
    constructor(props:INoteProps){
        super(props);
        this.state = {content:this.props.content};
    }

    public myClicked = (e:any)=>{
        this.props.clicked(this.state.content);
    }

    public render(){
        return (<li><button onClick={this.myClicked}>{this.props.note}</button></li>)
    }
}

export default Note;