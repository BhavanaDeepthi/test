import * as React from 'react';
import {ITodoHeaderProps} from "./types/ITodoHeaderProps";
import './TodoHeader.css';

class TodoHeader extends React.Component<ITodoHeaderProps, {}> {

    constructor(props: ITodoHeaderProps, context: any) {
        super(props, context);
    }


    public render() {
        return (
            <h1 className="header">React ToDo {this.props.name}</h1>
        );
    }
}

export default TodoHeader;
