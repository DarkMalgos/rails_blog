import React, { Component } from 'react';
import { render } from 'react-dom';

class CreatePostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
        this.titleChange = this.titleChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
        this.submitClick = this.submitClick.bind(this);
    }

    titleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    contentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    submitClick() {
        if (!this.state.title) {
            alert("please enter a title");
            return;
        }

        if (!this.state.content) {
            alert("please enter a content");
            return;
        }

        alert("bravo tu as remplis le formulaire");
        //TODO: faire la requête axios
    }

    render() {
        return(
            <section>
                <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={this.state.title} onChange={this.titleChange}/>
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea name="content" id="content" cols="30" rows="10" onChange={this.contentChange} value={this.state.content}/>
                    </div>
                    <button type="button" onClick={this.submitClick}>Send</button>
                </form>
            </section>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    render(
        <CreatePostForm/>,
        document.querySelector('#app'),
    )
});