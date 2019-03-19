import React, { Component } from 'react';
import config from '../../config'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            note_name: '',
            nameValid: false,
            nameValidationMessage: '',
            contentValid: false,
            contentValidationMessage: '',
        }
        this.contentInput = React.createRef();
    }

    updateName(note_name) {
        this.setState({note_name}, () => {this.validateName(note_name)});
    }

    validateName(name) {
        let errorMessage = this.state.nameValidationMessage;
        let error = this.state.nameValid;

        name = name.trim();
        if (name.length === 0) {
            errorMessage = 'Name must have at least 1 character';
            error = true;
        } else if (name.length > 20) {
            errorMessage = 'Name cannot be longer than 20 characters';
            error = true;
        } else {
            error = false;
            errorMessage = '';
        }

        this.setState({
            nameValid: !error,
            nameValidationMessage: errorMessage,
        });
    }

    validateContent(content) {
        let errorMessage = this.state.contentValidationMessage;
        let error = this.state.contentValid;

        content = content.trim();
        if (content.length === 0) {
        errorMessage = 'Content must have at least 1 character';
        error = true;
        }
        this.setState({
        contentValid: !error,
        contentValidationMessage: errorMessage
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const content = this.contentInput.current.value;
        this.validateContent(content);
        const { note_name } = this.state;

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({note_name, content})
        }
        fetch(`${config.API_ENDPOINT}/notes`, options)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Something went wrong')
                }
                return resp.json();
            })
            .then(respJson => {
                this.context.addNote(respJson);
                this.props.history.push(`/note/${respJson.id}`);
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    render() {
        return (
            <section>
                <header>
                    <h2>New Note</h2>
                </header>
                <form onSubmit={(event => this.handleSubmit(event))}>
                    <div>
                        <label htmlFor="note-name-input">Title</label><br />
                            <input type="text" placeholder="Note name..." id="note-name-input" name="note-name-input" value={this.state.name} onChange={event => this.updateName(event.target.value)} required />
                            {(!this.state.nameValid && this.state.nameValidationMessage) && <p className="error__message">{this.state.nameValidationMessage}</p>}<br />
                            <label htmlFor="content-input">content</label><br />
                            <textarea type="text" placeholder="content" id="note-content-input" name="note-content-input" ref={this.contentInput} required></textarea>
                            {(!this.state.contentValid && this.state.contentValidationMessage) && <p className="error__message">{this.state.contentValidationMessage}</p>}<br />
                        </div>
                    <button type="submit" disabled={!this.state.nameValid && !this.state.contentValid}>Add Note</button>
                </form>
            </section>
        )
    }
}
