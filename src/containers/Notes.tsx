import * as React from 'react';
import Note from '../components/Note';

interface INotesState{
    notes:INote[]
}

interface INotesProps{
    // current:string
    data:string
    clicked(content:string):void
}

interface INote {
    data:string
    name:string
}

class Notes extends React.Component<INotesProps,INotesState>{
    constructor(props:INotesProps){
        super(props);
        this.state = {notes:[]};
    }

    public addNote = ()=>{
        this.setState({notes:this.state.notes.concat({data:this.props.data,
                                                           name:"note"+(this.state.notes.length+1)})});
    }



    public render(){
        const list = this.state.notes.map((note,idx)=>{
            return <Note clicked={this.props.clicked} key={idx} note={note.name} content={note.data}/>
        });
        return (
            <div className="myNotes">
                <ul>{list}</ul>
                <button id="addBtn" onClick={this.addNote}>Add</button>
            </div>
        )
    }
}

export default Notes;